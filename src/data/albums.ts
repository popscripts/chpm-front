export type AlbumItem = {
  id: string;
  title: string;
  field_description: string;
  field_release_date: string;
  field_image: {
    url: string | null;
    alt: string;
  } | null;
  field_streaming_platforms: Array<{
    id: string;
    field_platform: string;
    field_url: string;
  }>;
  field_pieces: Array<{
    id: string;
    title: string;
  }>;
};

type AlbumApiNode = {
  id: string;
  attributes?: {
    title?: string;
    field_description?: string | null;
    field_release_date?: string | null;
  };
  relationships?: {
    field_image?: {
      data?:
        | {
            id: string;
            type: string;
            meta?: {
              alt?: string;
            };
          }
        | Array<{
            id: string;
            type: string;
            meta?: {
              alt?: string;
            };
          }>
        | null;
    };
    field_streaming_platforms?: {
      data?: Array<{ id: string; type: string }>;
    };
    field_pieces?: {
      data?: Array<{ id: string; type: string }>;
    };
  };
};

type StreamingIncluded = {
  id: string;
  type: "paragraph--streaming";
  attributes?: {
    field_service?: string | null;
    field_platform?: string | null;
    field_name?: string | null;
    field_url?:
      | string
      | { uri?: string | null; url?: string | null }
      | null;
    field_link?: { uri?: string | null; url?: string | null } | null;
  };
};

type CompositionIncluded = {
  id: string;
  type: "node--composition";
  attributes?: {
    title?: string | null;
  };
};

type FileIncluded = {
  id: string;
  type: "file--file" | "file--image";
  attributes?: {
    url?: string;
    uri?: {
      url?: string;
    };
    fileuri?: string;
  };
};

type AlbumsApiResponse = {
  data?: AlbumApiNode | AlbumApiNode[];
  included?: Array<StreamingIncluded | FileIncluded | CompositionIncluded>;
};

const getFirstRelationId = (
  relation?:
    | { id: string; type: string }
    | Array<{ id: string; type: string }>
    | null,
) => {
  if (!relation) {
    return null;
  }

  return Array.isArray(relation) ? (relation[0]?.id ?? null) : relation.id;
};

const normalizeBaseUrl = (url: string) => url.replace(/\/$/, "");

const resolveDrupalUrl = (baseUrl: string, rawUrl?: string | null) => {
  const value = rawUrl?.trim();
  if (!value) {
    return null;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${baseUrl}${value.startsWith("/") ? "" : "/"}${value}`;
};

const extractStreamUrl = (
  platform?: StreamingIncluded,
): { platform: string; url: string } | null => {
  if (!platform) {
    return null;
  }

  const fieldUrl = platform.attributes?.field_url;
  const directUrl =
    typeof fieldUrl === "string"
      ? fieldUrl
      : fieldUrl?.uri ?? fieldUrl?.url;
  const fieldLink = platform.attributes?.field_link;
  const linkUrl = fieldLink?.uri ?? fieldLink?.url;
  const url = (directUrl ?? linkUrl ?? "").trim();

  if (!url) {
    return null;
  }

  const platformName =
    platform.attributes?.field_service?.trim() ??
    platform.attributes?.field_platform?.trim() ??
    platform.attributes?.field_name?.trim() ??
    "";

  const normalizedPlatformName =
    platformName ||
    "Streaming";

  return { platform: normalizedPlatformName, url };
};

const getAppEnv = () =>
  (process.env.APP_ENV ?? process.env.NODE_ENV ?? "production").toLowerCase();

export async function fetchAlbums(): Promise<AlbumItem[]> {
  const baseUrl = process.env.API_URL;
  if (!baseUrl) {
    console.warn("API_URL is not set.");
    return [];
  }

  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);
  const isDevEnvironment = ["dev", "development"].includes(getAppEnv());

  try {
    const includeVariants = [
      "field_image,field_streaming_platforms,field_pieces",
      "field_image,field_pieces",
      "field_pieces",
      "",
    ];

    let response: Response | null = null;
    for (const include of includeVariants) {
      const params = new URLSearchParams();
      params.set("sort", "-field_release_date");
      if (include) {
        params.set("include", include);
      }

      const endpoint = `${normalizedBaseUrl}/jsonapi/node/album?${params.toString()}`;
      response = await fetch(
        endpoint,
        isDevEnvironment
          ? { cache: "no-store" }
          : { next: { revalidate: 3600 } },
      );

      if (response.ok || response.status !== 400) {
        break;
      }
    }

    if (!response || !response.ok) {
      const status = response?.status ?? "no-response";
      console.warn(`Albums fetch failed: ${status}`);
      return [];
    }

    const payload = (await response.json()) as AlbumsApiResponse;
    const items = Array.isArray(payload.data)
      ? payload.data
      : payload.data
        ? [payload.data]
        : [];

    const filesById = new Map(
      (payload.included ?? [])
        .filter(
          (item): item is FileIncluded =>
            item.type === "file--file" || item.type === "file--image",
        )
        .map((item) => [item.id, item]),
    );

    const streamingsById = new Map(
      (payload.included ?? [])
        .filter(
          (item): item is StreamingIncluded => item.type === "paragraph--streaming",
        )
        .map((item) => [item.id, item]),
    );

    const piecesById = new Map(
      (payload.included ?? [])
        .filter(
          (item): item is CompositionIncluded => item.type === "node--composition",
        )
        .map((item) => [item.id, item]),
    );

    return items
      .map((item) => {
        const imageRelationId = getFirstRelationId(item.relationships?.field_image?.data);
        const file = imageRelationId ? filesById.get(imageRelationId) : undefined;

        const coverUrl = resolveDrupalUrl(
          normalizedBaseUrl,
          file?.attributes?.uri?.url ?? file?.attributes?.url ?? file?.attributes?.fileuri,
        );

        const imageData = item.relationships?.field_image?.data;
        const imageAlt =
          imageData && !Array.isArray(imageData) ? imageData.meta?.alt?.trim() : "";
        const coverAlt = imageAlt || item.attributes?.title?.trim() || "Okładka albumu";

        const streamingRefs = item.relationships?.field_streaming_platforms?.data ?? [];
        const streamingPlatforms = streamingRefs
          .map((ref) => {
            const stream = extractStreamUrl(streamingsById.get(ref.id));
            if (!stream) {
              return null;
            }

            return {
              id: ref.id,
              field_platform: stream.platform,
              field_url: stream.url,
            };
          })
          .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

        const pieceRefs = item.relationships?.field_pieces?.data ?? [];
        const pieces = pieceRefs
          .map((ref) => {
            const piece = piecesById.get(ref.id);
            if (!piece) {
              return null;
            }

            return {
              id: piece.id,
              title: piece.attributes?.title?.trim() ?? "",
            };
          })
          .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry?.title));

        return {
          id: item.id,
          title: item.attributes?.title?.trim() ?? "",
          field_description: item.attributes?.field_description?.trim() ?? "",
          field_release_date: item.attributes?.field_release_date?.trim() ?? "",
          field_image: {
            url: coverUrl,
            alt: coverAlt,
          },
          field_streaming_platforms: streamingPlatforms,
          field_pieces: pieces,
        };
      })
      .filter((album) => Boolean(album.title));
  } catch (error) {
    console.warn("Albums fetch error:", error);
    return [];
  }
}
