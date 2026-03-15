import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

async function Project() {
  const t = await getTranslations("aboutPage.project");

  return (
    <SectionWrapper id="wspolne-brzmienia" background="dark">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-reveal fade-up">
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
          <p className="text-(--color-off-white)/70 font-montserrat leading-relaxed mb-8">
            {t.rich("descriptionRich", {
              highlight: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 border border-(--color-champagne-gold) text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold) hover:text-[#1A1A1A] transition-all duration-300"
          >
            {t("cta")}
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Project;
