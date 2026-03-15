import { getLocale } from "next-intl/server";

export type DrupalLocale = "pl" | "en";

const normalizeLocale = (value?: string | null): DrupalLocale | undefined => {
  const locale = value?.toLowerCase().trim();
  if (!locale) {
    return undefined;
  }

  if (locale.startsWith("pl")) {
    return "pl";
  }

  if (locale.startsWith("en")) {
    return "en";
  }

  return undefined;
};

export async function resolveDrupalLocale(
  explicitLocale?: string,
): Promise<DrupalLocale | undefined> {
  const fromExplicit = normalizeLocale(explicitLocale);
  if (fromExplicit) {
    return fromExplicit;
  }

  try {
    const locale = await getLocale();
    return normalizeLocale(locale);
  } catch {
    return undefined;
  }
}

/**
 * Returns the Drupal JSON:API URL path prefix for the given locale.
 * English: "/en"  |  Polish (default): ""
 * Usage: `${baseUrl}${drupalLocalePathPrefix(locale)}/jsonapi/...`
 */
export function drupalLocalePathPrefix(locale?: DrupalLocale): string {
  return locale === "en" ? "/en" : "";
}
