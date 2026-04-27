import {
  drupalLocalePathPrefix,
  resolveDrupalLocale,
} from "@/data/drupalLocale";

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
          field_awards?: string[] | null;
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
          field_awards?: string[] | null;
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
  locale?: string;
};

const getAppEnv = () =>
  (process.env.APP_ENV ?? process.env.NODE_ENV ?? "production").toLowerCase();

export async function fetchFestivals(
  options: FetchFestivalsOptions = {},
): Promise<FestivalItem[]> {
  const { limit, offset, locale } = options;
  const baseUrl = process.env.API_URL;
  if (!baseUrl) {
    console.warn("API_URL is not set.");
    return [];
  }

  const isDevEnvironment = ["dev", "development"].includes(getAppEnv());
  const drupalLocale = await resolveDrupalLocale(locale);

  try {
    const params = new URLSearchParams();
    params.set("sort", "-field_year");
    if (typeof limit === "number") {
      params.set("page[limit]", String(limit));
    }
    if (typeof offset === "number") {
      params.set("page[offset]", String(offset));
    }

    const localePrefix = drupalLocalePathPrefix(drupalLocale);
    const response = await fetch(
      `${baseUrl}${localePrefix}/jsonapi/node/festival?${params.toString()}`,

      isDevEnvironment
        ? { cache: "no-store" }
        : {
            next: { revalidate: 2592000 },
          },
    );

    if (!response.ok) {
      console.warn(`Festival fetch failed: ${response.status}`);
      return [];
    }

    const payload = (await response.json()) as FestivalApiResponse;

    const includedAwards = new Map(
      (payload.included ?? [])
        .filter((item) => item.type === "paragraph--award")
        .map((item) => [item.id, item]),
    );

    const items = Array.isArray(payload.data)
      ? payload.data
      : payload.data
        ? [payload.data]
        : [];

    const festivals = items.map((item) => {
      const attributeAwards = item.attributes?.field_awards;

      const awards = Array.isArray(attributeAwards)
        ? attributeAwards
            .filter((award): award is string => typeof award === "string")
            .map((award, index) => ({
              id: `${item.id}-award-${index}`,
              title: award,
            }))
        : (item.relationships?.field_awards?.data ?? [])
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
