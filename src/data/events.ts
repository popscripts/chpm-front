export type EventItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  duration: number | null;
  link: string | null;
  imageUrl: string | null;
  socialMedia: Array<{
    id: string;
    platform: string;
    url: string;
  }>;
};

type EventApiNode = {
  id: string;
  attributes?: {
    title?: string;
    field_description?: string | null;
    field_date?: string | null;
    field_location?: string | null;
    field_duration?: number | null;
    field_link?: {
      uri?: string;
      title?: string;
      options?: unknown[];
    } | null;
  };
  relationships?: {
    field_image?: {
      data?:
        | { id: string; type: string }
        | Array<{ id: string; type: string }>
        | null;
    };
    field_social_media?: {
      data?: Array<{ id: string; type: string }>;
    };
  };
};

type SocialMediaIncluded = {
  id: string;
  type: "paragraph--social_media";
  attributes?: {
    field_platform?: string;
    field_link?: {
      uri?: string;
    } | null;
  };
};

type MediaImageIncluded = {
  id: string;
  type: "media--image";
  relationships?: {
    field_media_image?: {
      data?:
        | { id: string; type: string }
        | Array<{ id: string; type: string }>
        | null;
    };
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

type EventsApiResponse = {
  data?: EventApiNode | EventApiNode[];
  included?: Array<SocialMediaIncluded | MediaImageIncluded | FileIncluded>;
};

export async function fetchEvents(): Promise<EventItem[]> {
  const baseUrl = process.env.API_URL;
  if (!baseUrl) {
    console.warn("API_URL is not set.");
    return [];
  }

  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
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

  const resolveDrupalUrl = (url?: string | null) => {
    const value = url?.trim();
    if (!value) {
      return null;
    }

    if (/^https?:\/\//i.test(value)) {
      return value;
    }

    return `${normalizedBaseUrl}${value.startsWith("/") ? "" : "/"}${value}`;
  };

  try {
    const includeVariants = [
      "field_social_media,field_image",
      "field_social_media",
      "field_image",
      "",
    ];

    let response: Response | null = null;
    for (const include of includeVariants) {
      const params = new URLSearchParams();
      params.set("sort", "-field_date");
      if (include) {
        params.set("include", include);
      }

      const query = params.toString();
      const endpoint = `${normalizedBaseUrl}/jsonapi/node/event${query ? `?${query}` : ""}`;
      console.log(endpoint);

      response = await fetch(endpoint, {
        cache: "no-store",
      });

      if (response.ok) {
        break;
      }

      if (response.status !== 400) {
        break;
      }
    }

    if (!response || !response.ok) {
      const status = response?.status ?? "no-response";
      console.warn(`Events fetch failed: ${status}`);
      return [];
    }

    const payload = (await response.json()) as EventsApiResponse;
    const items = Array.isArray(payload.data)
      ? payload.data
      : payload.data
        ? [payload.data]
        : [];

    const socialMediaById = new Map(
      (payload.included ?? [])
        .filter(
          (item): item is SocialMediaIncluded =>
            item.type === "paragraph--social_media",
        )
        .map((item) => [item.id, item]),
    );

    const mediaById = new Map(
      (payload.included ?? [])
        .filter(
          (item): item is MediaImageIncluded => item.type === "media--image",
        )
        .map((item) => [item.id, item]),
    );

    const filesById = new Map(
      (payload.included ?? [])
        .filter(
          (item): item is FileIncluded =>
            item.type === "file--file" || item.type === "file--image",
        )
        .map((item) => [item.id, item]),
    );

    return items
      .map((item) => {
        const socialRefs = item.relationships?.field_social_media?.data ?? [];
        const socialMedia = socialRefs
          .map((ref) => socialMediaById.get(ref.id))
          .filter((entry): entry is SocialMediaIncluded => Boolean(entry))
          .map((entry) => ({
            id: entry.id,
            platform: entry.attributes?.field_platform?.trim() ?? "",
            url: entry.attributes?.field_link?.uri?.trim() ?? "",
          }))
          .filter((entry) => Boolean(entry.url));

        const imageRelationId = getFirstRelationId(
          item.relationships?.field_image?.data,
        );
        const directFile = imageRelationId
          ? filesById.get(imageRelationId)
          : undefined;
        const media = imageRelationId
          ? mediaById.get(imageRelationId)
          : undefined;
        const fileId = getFirstRelationId(
          media?.relationships?.field_media_image?.data,
        );
        const file = directFile ?? (fileId ? filesById.get(fileId) : undefined);
        const imageUrl = resolveDrupalUrl(
          file?.attributes?.uri?.url ??
            file?.attributes?.url ??
            file?.attributes?.fileuri,
        );

        return {
          id: item.id,
          title: item.attributes?.title?.trim() ?? "",
          description: item.attributes?.field_description?.trim() ?? "",
          date: item.attributes?.field_date ?? "",
          location: item.attributes?.field_location?.trim() ?? "",
          duration:
            typeof item.attributes?.field_duration === "number"
              ? item.attributes.field_duration
              : null,
          link: item.attributes?.field_link?.uri ?? null,
          imageUrl,
          socialMedia,
        };
      })
      .filter(
        (event) =>
          Boolean(event.title) &&
          Boolean(event.description) &&
          Boolean(event.date) &&
          Boolean(event.location),
      );
  } catch (error) {
    console.warn("Events fetch error:", error);
    return [];
  }
}

export async function fetchEventById(id: string): Promise<EventItem | null> {
  const events = await fetchEvents();
  return events.find((event) => event.id === id) ?? null;
}
