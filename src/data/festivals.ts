export type FestivalItem = {
  id: string;
  title: string;
  year: number | null;
  description: string | null;
  awards: Array<{ id: string; title: string }>;
};

type FestivalApiResponse = {
  data?:
    | {
        id: string;
        attributes?: {
          title?: string;
          field_year?: number | null;
          field_description?: string | null;
        };
        relationships?: {
          field_awards?: {
            data?: Array<{ id: string; type: string }>;
          };
        };
      }
    | Array<{
        id: string;
        attributes?: {
          title?: string;
          field_year?: number | null;
          field_description?: string | null;
        };
        relationships?: {
          field_awards?: {
            data?: Array<{ id: string; type: string }>;
          };
        };
      }>;
  included?: Array<{
    id: string;
    type: string;
    attributes?: {
      title?: string;
      field_award_title?: string;
      field_name?: string;
    };
  }>;
};

type FetchFestivalsOptions = {
  limit?: number;
  offset?: number;
};

export async function fetchFestivals(
  options: FetchFestivalsOptions = {}
): Promise<FestivalItem[]> {
  const { limit, offset } = options;
  const baseUrl = process.env.API_URL;
  if (!baseUrl) {
    console.warn("API_URL is not set.");
    return [];
  }

  try {
    const params = new URLSearchParams();
    params.set("include", "field_awards");
    if (typeof limit === "number") {
      params.set("page[limit]", String(limit));
    }
    if (typeof offset === "number") {
      params.set("page[offset]", String(offset));
    }

    const response = await fetch(
      `${baseUrl}/jsonapi/node/festival?${params.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.warn(`Festival fetch failed: ${response.status}`);
      return [];
    }

    const payload = (await response.json()) as FestivalApiResponse;

    const includedAwards = new Map(
      (payload.included ?? [])
        .filter((item) => item.type === "paragraph--award")
        .map((item) => [item.id, item])
    );

    const items = Array.isArray(payload.data)
      ? payload.data
      : payload.data
        ? [payload.data]
        : [];

    const festivals = items.map((item) => {
      const awardRefs = item.relationships?.field_awards?.data ?? [];
      const awards = awardRefs
        .map((ref) => includedAwards.get(ref.id))
        .filter((award): award is NonNullable<typeof award> => Boolean(award))
        .map((award) => ({
          id: award.id,
          title:
            award.attributes?.field_award_title ??
            award.attributes?.title ??
            award.attributes?.field_name ??
            "",
        }));

      return {
        id: item.id,
        title: item.attributes?.title ?? "",
        year: item.attributes?.field_year ?? null,
        description: item.attributes?.field_description ?? null,
        awards,
      };
    });

    return festivals;
  } catch (error) {
    console.warn("Festival fetch error:", error);
    return [];
  }
}
