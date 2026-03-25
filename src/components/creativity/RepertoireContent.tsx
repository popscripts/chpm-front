"use client";

import type { CompositionItem } from "@/data/compositions";
import type { GenreItem } from "@/data/genres";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

const LOADING_MESSAGE_DELAY_MS = 300;

type RepertoireContentProps = {
  initialCompositions: CompositionItem[];
  availableGenres: GenreItem[];
  locale: string;
};

function groupCompositionsByLetter(
  compositions: CompositionItem[],
  locale: string,
): Array<[string, CompositionItem[]]> {
  const localeTag = locale === "en" ? "en-US" : "pl-PL";

  const compositionsByLetter = compositions.reduce<
    Record<string, CompositionItem[]>
  >((acc, composition) => {
    const firstLetter = composition.title
      .trim()
      .charAt(0)
      .toLocaleUpperCase(localeTag);
    const key = firstLetter || "#";

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(composition);
    return acc;
  }, {});

  return Object.entries(compositionsByLetter).sort(([a], [b]) =>
    a.localeCompare(b, localeTag),
  );
}

export default function RepertoireContent({
  initialCompositions,
  availableGenres,
  locale,
}: RepertoireContentProps) {
  const t = useTranslations("repertoirePage");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [compositions, setCompositions] =
    useState<CompositionItem[]>(initialCompositions);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShowLoadingMessage(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setShowLoadingMessage(true);
    }, LOADING_MESSAGE_DELAY_MS);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isLoading]);

  useEffect(() => {
    if (selectedGenres.length === 0) {
      setCompositions(initialCompositions);
      setIsLoading(false);
      setIsError(false);
      return;
    }

    const controller = new AbortController();

    const fetchFilteredCompositions = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const params = new URLSearchParams();
        params.set("locale", locale);
        params.set("genres", selectedGenres.join(","));

        const response = await fetch(`/api/compositions?${params.toString()}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          setIsError(true);
          setCompositions([]);
          return;
        }

        const payload = (await response.json()) as {
          compositions?: CompositionItem[];
        };

        setCompositions(payload.compositions ?? []);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setIsError(true);
          setCompositions([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchFilteredCompositions();

    return () => {
      controller.abort();
    };
  }, [initialCompositions, locale, selectedGenres]);

  const groupedEntries = useMemo(
    () => groupCompositionsByLetter(compositions, locale),
    [compositions, locale],
  );

  const toggleGenre = (genreName: string) => {
    setSelectedGenres((previous) =>
      previous.includes(genreName)
        ? previous.filter((item) => item !== genreName)
        : [...previous, genreName],
    );
  };

  return (
    <>
      <section className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <p className="font-montserrat text-sm uppercase tracking-[0.18em] text-(--color-off-white)/70">
            {t("filterLabel")}
          </p>
          {selectedGenres.length > 0 ? (
            <button
              type="button"
              onClick={() => setSelectedGenres([])}
              className="self-start md:self-auto text-(--color-champagne-gold) font-montserrat text-xs uppercase tracking-[0.14em] hover:text-(--color-off-white) transition-colors"
            >
              {t("clearFilters")}
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {availableGenres.map((genre) => {
            const isSelected = selectedGenres.includes(genre.name);

            return (
              <button
                key={genre.id}
                type="button"
                onClick={() => toggleGenre(genre.name)}
                aria-pressed={isSelected}
                className={`px-3 py-1 text-xs uppercase tracking-[0.1rem] font-montserrat rounded-full border transition-colors ${
                  isSelected
                    ? "border-(--color-champagne-gold) text-(--color-champagne-gold) bg-(--color-champagne-gold)/10"
                    : "border-(--color-off-white)/20 text-(--color-off-white-medium) hover:border-(--color-off-white)/45 hover:text-(--color-off-white)"
                }`}
              >
                {genre.name}
              </button>
            );
          })}
        </div>
      </section>

      {isLoading && showLoadingMessage ? (
        <p className="text-center text-(--color-off-white)/70 font-montserrat">
          {t("loading")}
        </p>
      ) : isError ? (
        <p className="text-center text-(--color-off-white)/70 font-montserrat">
          {t("filterError")}
        </p>
      ) : compositions.length === 0 ? (
        <p className="text-center text-(--color-off-white)/70 font-montserrat">
          {selectedGenres.length > 0 ? t("noResults") : t("empty")}
        </p>
      ) : (
        <div className="space-y-10">
          {groupedEntries.map(([letter, letterCompositions]) => (
            <section key={letter} className="mb-4">
              <div className="flex items-center gap-4">
                <span className="font-playfair text-3xl text-[#D4AF37]">{letter}</span>
                <div className="flex-1 h-px bg-[#F5F5F5]/10" />
              </div>
              <ul className="space-y-3 ml-6 mt-2 grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-y-4">
                {letterCompositions.map((composition, index) => {
                  const details: string[] = [];
                  const hasLeftBorder = index % 2 === 1;
                  const hasTopBorder = false;

                  if (composition.composers.length > 0) {
                    details.push(composition.composers.join(", "));
                  }

                  if (composition.arrangers.length > 0) {
                    details.push(
                      `${t("arrangerPrefix")} ${composition.arrangers.join(", ")}`,
                    );
                  }

                  return (
                    <li
                      key={composition.id}
                      className={`pl-4 p-2 m-0 h-full border-(--color-off-white)/10 ${hasLeftBorder ? "md:border-l" : ""} ${hasTopBorder ? "md:border-t" : ""} hover:bg-(--color-off-white-medium)/10 transition-colors`}
                    >
                      <p>
                        <span className="font-playfair text-lg text-(--color-off-white)">
                          {composition.title}
                        </span>
                        <span className="text-(--color-off-white-medium) text-sm text-montserrat">
                          {details.length > 0 ? ` - ${details.join(", ")}` : ""}
                        </span>
                      </p>
                      {composition.genres.length > 0 &&
                        composition.genres.map((genre) => (
                          <span
                            key={genre}
                            className="mt-1 px-2 py-1 mr-1 text-[0.6rem] uppercase tracking-[0.1rem] font-montserrat text-(--color-off-white-medium) bg-(--color-off-white-medium)/10 rounded-full"
                          >
                            {genre}
                          </span>
                        ))}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
