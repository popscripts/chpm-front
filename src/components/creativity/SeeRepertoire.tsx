import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

async function SeeRepertoire() {
  const t = await getTranslations("creativityPage.seeRepertoire");

  return (
    <SectionWrapper
      id="repertuar"
      background="tealLinear"
    >
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          title={t("title")}
          eyebrow={t("eyebrow")}
          description={t("description")}
        />
        <Link
          href="/repertuar"
          className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-(--color-champagne-gold) text-(--color-soft-charcoal) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold)/90 transition-all duration-300"
        >
          {t("cta")}
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </SectionWrapper>
  );
}

export default SeeRepertoire;
