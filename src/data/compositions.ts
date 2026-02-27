export type CompositionItem = {
  id: string;
  title: string;
  genres: string[];
  composers: string[];
  arrangers: string[];
};

type CompositionApiNode = {
  id: string;
  attributes?: {
    title?: string | null;
  };
  relationships?: {
    field_genres?: {
      data?: Array<{ id: string; type: string }>;
    };
    field_composer?: {
      data?: { id: string; type: string } | Array<{ id: string; type: string }> | null;
    };
    field_arranger?: {
      data?: { id: string; type: string } | Array<{ id: string; type: string }> | null;
    };
  };
};

type GenreIncluded = {
  id: string;
  type: string;
  attributes?: {
    name?: string | null;
    title?: string | null;
  };
};

type PersonIncluded = {
  id: string;
  type: string;
  attributes?: {
    name?: string | null;
    title?: string | null;
  };
};

type CompositionsApiResponse = {
  data?: CompositionApiNode | CompositionApiNode[];
  included?: Array<GenreIncluded | PersonIncluded>;
};

const getRelationIds = (
  relation?: { id: string; type: string } | Array<{ id: string; type: string }> | null,
) => {
  if (!relation) {
    return [];
  }

  return Array.isArray(relation) ? relation.map((item) => item.id) : [relation.id];
};

const getIncludedLabel = (item?: GenreIncluded | PersonIncluded) =>
  item?.attributes?.name?.trim() ?? item?.attributes?.title?.trim() ?? "";

const getAppEnv = () =>
  (process.env.APP_ENV ?? process.env.NODE_ENV ?? "production").toLowerCase();

export async function fetchCompositions(): Promise<CompositionItem[]> {
  const baseUrl = process.env.API_URL;
  if (!baseUrl) {
    console.warn("API_URL is not set.");
    return [];
  }

  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
  const isDevEnvironment = ["dev", "development"].includes(getAppEnv());

  try {
    const response = await fetch(
      `${normalizedBaseUrl}/jsonapi/node/composition?include=field_genres,field_composer,field_arranger`,
      isDevEnvironment
        ? { cache: "no-store" }
        : { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      console.warn(`Compositions fetch failed: ${response.status}`);
      return [];
    }

    const payload = (await response.json()) as CompositionsApiResponse;
    const items = Array.isArray(payload.data)
      ? payload.data
      : payload.data
        ? [payload.data]
        : [];

    const genresById = new Map(
      (payload.included ?? [])
        .filter((item) => item.type.startsWith("taxonomy_term--"))
        .map((item) => [item.id, item]),
    );

    return items
      .map((item) => {
        const genreRefs = item.relationships?.field_genres?.data ?? [];
        const genres = genreRefs
          .map((ref) => genresById.get(ref.id))
          .filter((entry): entry is GenreIncluded => Boolean(entry))
          .map((entry) => getIncludedLabel(entry))
          .filter(Boolean);

        const includedById = new Map((payload.included ?? []).map((entry) => [entry.id, entry]));

        const composers = getRelationIds(item.relationships?.field_composer?.data)
          .map((id) => includedById.get(id))
          .map((entry) => getIncludedLabel(entry))
          .filter(Boolean);

        const arrangers = getRelationIds(item.relationships?.field_arranger?.data)
          .map((id) => includedById.get(id))
          .map((entry) => getIncludedLabel(entry))
          .filter(Boolean);

        return {
          id: item.id,
          title: item.attributes?.title?.trim() ?? "",
          genres,
          composers,
          arrangers,
        };
      })
      .filter((composition) => Boolean(composition.title))
      .sort((a, b) => a.title.localeCompare(b.title, "pl"));
  } catch (error) {
    console.warn("Compositions fetch error:", error);
    return [];
  }
}