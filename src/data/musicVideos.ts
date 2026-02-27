export type MusicVideoItem = {
  id: string;
  title: string;
  field_description: string | null;
  field_release_date: string;
  field_link: {
    uri: string;
    title: string;
  } | null;
};

type MusicVideoApiNode = {
  id: string;
  attributes?: {
    title?: string;
    field_description?: string | null;
    field_release_date?: string | null;
    field_link?: {
      uri?: string;
      title?: string;
      options?: unknown[];
    } | null;
  };
};

type MusicVideosApiResponse = {
  data?: MusicVideoApiNode | MusicVideoApiNode[];
};

const getAppEnv = () =>
  (process.env.APP_ENV ?? process.env.NODE_ENV ?? "production").toLowerCase();

export async function fetchMusicVideos(): Promise<MusicVideoItem[]> {
  const baseUrl = process.env.API_URL;
  if (!baseUrl) {
    console.warn("API_URL is not set.");
    return [];
  }

  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
  const isDevEnvironment = ["dev", "development"].includes(getAppEnv());

  try {
    const params = new URLSearchParams();
    params.set("sort", "-field_release_date");

    const response = await fetch(
      `${normalizedBaseUrl}/jsonapi/node/music_video?${params.toString()}`,
      isDevEnvironment
        ? { cache: "no-store" }
        : {
            next: { revalidate: 3600 },
          },
    );

    if (!response.ok) {
      console.warn(`Music videos fetch failed: ${response.status}`);
      return [];
    }

    const payload = (await response.json()) as MusicVideosApiResponse;
    const items = Array.isArray(payload.data)
      ? payload.data
      : payload.data
        ? [payload.data]
        : [];

    return items
      .map((item) => {
        const uri = item.attributes?.field_link?.uri?.trim() ?? "";
        const title = item.attributes?.title?.trim() ?? "";

        return {
          id: item.id,
          title,
          field_description: item.attributes?.field_description ?? null,
          field_release_date: item.attributes?.field_release_date?.trim() ?? "",
          field_link: uri
            ? {
                uri,
                title: item.attributes?.field_link?.title?.trim() ?? "",
              }
            : null,
        };
      })
      .filter((video) => Boolean(video.title) && Boolean(video.field_link?.uri));
  } catch (error) {
    console.warn("Music videos fetch error:", error);
    return [];
  }
}
