import { Award, Globe, Medal } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../layout/SectionWrapper";
import AlternatingFeatureList, {
  type AlternatingFeatureItem,
} from "../ui/AlternatingFeatureList";
import SectionHeader from "../ui/SectionHeader";

async function Achievements() {
  const t = await getTranslations("aboutPage.achievements");

  const achievements: AlternatingFeatureItem[] = [
    {
      title: t("items.expo.title"),
      icon: Globe,
      image: "/assets/images/chór_osaka.jpg",
      content: (
        <>
          <span className="block mb-3">
            {t.rich("items.expo.paragraph1Rich", {
              highlight: (chunks) => (
                <strong className="text-(--color-off-white)">{chunks}</strong>
              ),
            })}
          </span>
          <span className="block">{t("items.expo.paragraph2")}</span>
        </>
      ),
    },
    {
      title: t("items.fryderyk.title"),
      icon: Award,
      image: "/assets/images/Fryderyk_grafika-1.png",
      content: (
        <>
          <span className="block mb-3">
            {t.rich("items.fryderyk.paragraph1Rich", {
              highlight: (chunks) => (
                <strong className="text-(--color-off-white)">{chunks}</strong>
              ),
            })}
          </span>
          <span className="block">{t("items.fryderyk.paragraph2")}</span>
        </>
      ),
    },
    {
      title: t("items.ambassador.title"),
      icon: Medal,
      image: "/assets/images/Ambasador-Szczecina-blog1.jpg",
      content: (
        <>
          <span className="block mb-3">
            {t.rich("items.ambassador.paragraph1Rich", {
              highlight: (chunks) => (
                <strong className="text-(--color-off-white)">{chunks}</strong>
              ),
            })}
          </span>
          <span className="block">{t("items.ambassador.paragraph2")}</span>
        </>
      ),
    },
  ];

  return (
    <SectionWrapper id="osiagniecia" background="tealRadial">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-reveal fade-up">
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
        </div>

        <AlternatingFeatureList items={achievements} />
      </div>
    </SectionWrapper>
  );
}

export default Achievements;
