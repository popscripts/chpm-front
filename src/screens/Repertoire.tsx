import { fetchCompositions } from "@/data/compositions";
import RepertoireContent from "@/components/creativity/RepertoireContent";
import { fetchGenres } from "@/data/genres";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Repertoire() {
  const locale = await getLocale();
  const t = await getTranslations("repertoirePage");
  const [compositions, genres] = await Promise.all([
    fetchCompositions(locale),
    fetchGenres(locale),
  ]);

  return (
    <div className="bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal) min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-reveal fade-up">
          <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
            {t("eyebrow")}
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-(--color-off-white)">
            {t("title")}
          </h1>
          <p className="mt-4 font-montserrat text-(--color-off-white)/70">
            {t("subtitle")}
          </p>
        </div>

        <RepertoireContent
          initialCompositions={compositions}
          availableGenres={genres}
          locale={locale}
        />
      </div>
    </div>
  );
}
