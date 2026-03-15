import type { FestivalItem } from "@/data/festivals";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import AwardsList from "./AwardsList";

type AwardsProps = {
  festivals?: FestivalItem[];
};

async function Awards({ festivals = [] }: AwardsProps) {
  const t = await getTranslations("aboutPage.awards");

  const hasFestivals = festivals.length > 0;

  if (!hasFestivals) {
    return null;
  }

  return (
    <SectionWrapper id="nagrody" background="tealRadial">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 animate-reveal fade-up">
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={
              t.rich("descriptionRich", {
                highlight: (chunks) => (
                  <strong className="text-(--color-champagne-gold)">{chunks}</strong>
                ),
              })
            }
          />
        </div>

        {hasFestivals ? <AwardsList festivals={festivals} /> : null}
        <div className="text-center mt-8">
          <Link
            href="/nagrody"
            className="inline-flex items-center gap-3 px-8 py-4 bg-(--color-champagne-gold)/10 border border-(--color-champagne-gold) text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold) hover:text-[#1A1A1A] transition-all duration-300"
          >
            {t("ctaAll")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Awards;
