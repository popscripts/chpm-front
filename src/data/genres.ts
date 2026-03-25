import {
  drupalLocalePathPrefix,
  resolveDrupalLocale,
} from "@/data/drupalLocale";

export type GenreItem = {
  id: string;
  name: string;
};

type GenresApiResponse = {
  data?:
    | {
        id: string;
        attributes?: {
          name?: string | null;
        };
      }
    | Array<{
        id: string;
        attributes?: {
          name?: string | null;
        };
      }>;
};

const getAppEnv = () =>
  (process.env.APP_ENV ?? process.env.NODE_ENV ?? "production").toLowerCase();

export async function fetchGenres(locale?: string): Promise<GenreItem[]> {
  const baseUrl = process.env.API_URL;
  if (!baseUrl) {
    console.warn("API_URL is not set.");
    return [];
  }

  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
  const isDevEnvironment = ["dev", "development"].includes(getAppEnv());
  const drupalLocale = await resolveDrupalLocale(locale);

  try {
    const localePrefix = drupalLocalePathPrefix(drupalLocale);
    const response = await fetch(
      `${normalizedBaseUrl}${localePrefix}/jsonapi/taxonomy_term/genres`,
      isDevEnvironment ? { cache: "no-store" } : { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      console.warn(`Genres fetch failed: ${response.status}`);
      return [];
    }

    const payload = (await response.json()) as GenresApiResponse;
    const localeTag = drupalLocale === "en" ? "en" : "pl";
    const items = Array.isArray(payload.data)
      ? payload.data
      : payload.data
        ? [payload.data]
        : [];

    return items
      .map((item) => ({
        id: item.id,
        name: item.attributes?.name?.trim() ?? "",
      }))
      .filter((genre) => Boolean(genre.name))
      .sort((a, b) => a.name.localeCompare(b.name, localeTag));
  } catch (error) {
    console.warn("Genres fetch error:", error);
    return [];
  }
}
