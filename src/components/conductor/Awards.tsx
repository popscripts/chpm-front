import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import { getTranslations } from "next-intl/server";

type ConductorAwardItem = {
  title: string;
  description?: string;
  date: string;
};

async function Awards() {
  const t = await getTranslations("conductorPage.awards");

  const conductorAwards: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ConductorAwardItem[];
  } = {
    eyebrow: t("eyebrow"),
    title: t("title"),
    intro: t("intro"),
    items: [
      {
        title: t("items.cavalierCross.title"),
        description: t("items.cavalierCross.description"),
        date: t("items.cavalierCross.date"),
      },
      {
        title: t("items.rectorAward.title"),
        description: t("items.rectorAward.description"),
        date: t("items.rectorAward.date"),
      },
      {
        title: t("items.proArte.title"),
        description: t("items.proArte.description"),
        date: t("items.proArte.date"),
      },
      {
        title: t("items.maritimeMedal.title"),
        date: t("items.maritimeMedal.date"),
      },
      {
        title: t("items.hongKong.title"),
        description: t("items.hongKong.description"),
        date: t("items.hongKong.date"),
      },
      {
        title: t("items.magnolias.title"),
        description: t("items.magnolias.description"),
        date: t("items.magnolias.date"),
      },
      {
        title: t("items.gloriaArtis.title"),
        description: t("items.gloriaArtis.description"),
        date: t("items.gloriaArtis.date"),
      },
      {
        title: t("items.meritCross.title"),
        description: t("items.meritCross.description"),
        date: t("items.meritCross.date"),
      },
      {
        title: t("items.pzchioBadge.title"),
        date: t("items.pzchioBadge.date"),
      },
      {
        title: t("items.archdioceseCross.title"),
        date: t("items.archdioceseCross.date"),
      },
      {
        title: t("items.ambassadorTitle.title"),
        date: t("items.ambassadorTitle.date"),
      },
      {
        title: t("items.cityAwardNomination.title"),
        date: t("items.cityAwardNomination.date"),
      },
      {
        title: t("items.westPomeranianNobel.title"),
        date: t("items.westPomeranianNobel.date"),
      },
      {
        title: t("items.rectorPrizes.title"),
        date: t("items.rectorPrizes.date"),
      },
      {
        title: t("items.educationCommissionMedal.title"),
        description: t("items.educationCommissionMedal.description"),
        date: t("items.educationCommissionMedal.date"),
      },
      {
        title: t("items.cultureBadge.title"),
        description: t("items.cultureBadge.description"),
        date: t("items.cultureBadge.date"),
      },
      {
        title: t("items.recognitionDiploma.title"),
        description: t("items.recognitionDiploma.description"),
        date: t("items.recognitionDiploma.date"),
      },
      {
        title: t("items.bestConductorAwards.title"),
        description: t("items.bestConductorAwards.description"),
        date: t("items.bestConductorAwards.date"),
      },
    ],
  };

  return (
    <SectionWrapper id="nagrody-i-wyroznienia" background="tealLinear">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 animate-reveal fade-up">
          <SectionHeader
            eyebrow={conductorAwards.eyebrow}
            title={conductorAwards.title}
            description={conductorAwards.intro}
            highlightWordsFromEnd={0}
            className="mx-auto max-w-2xl"
          />
        </div>

        <div className="divide-y divide-(--color-off-white)/12 border-y border-(--color-off-white)/12">
          {conductorAwards.items.map((award, index) => (
            <article
              key={`${award.title}-${award.date}`}
              className="animate-reveal fade-up py-4"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="grid gap-2 md:grid-cols-[170px_1fr] md:items-start md:gap-4">
                <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-(--color-champagne-gold) md:pt-1">
                  {award.date}
                </span>
                <div>
                  <h3 className="mb-2 font-playfair text-2xl text-(--color-off-white)">
                    {award.title}
                  </h3>
                  {award.description ? (
                    <p className="font-montserrat text-sm leading-relaxed text-(--color-off-white)/70">
                      {award.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Awards;