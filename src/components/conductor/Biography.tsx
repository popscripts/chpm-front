import AlternatingFeatureList, {
  type AlternatingFeatureItem,
} from "@/components/ui/AlternatingFeatureList";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

async function Biography() {
  const t = await getTranslations("conductorPage.biography");

  const biographyHighlights: AlternatingFeatureItem[] = [
    {
      title: t("items.education.title"),
      image: "/assets/images/Sylwia1.png",
      imageAlt: t("items.education.imageAlt"),
      content: t.rich("items.education.contentRich", {
        highlight: (chunks) => (
          <strong className="text-(--color-off-white)">{chunks}</strong>
        ),
      }),
    },
    {
      title: t("items.artistic.title"),
      image: "/assets/images/about_hero1.jpg",
      imageAlt: t("items.artistic.imageAlt"),
      content: t.rich("items.artistic.contentRich", {
        highlight: (chunks) => (
          <strong className="text-(--color-off-white)">{chunks}</strong>
        ),
      }),
    },
    {
      title: t("items.educational.title"),
      image: "/assets/images/about_hero2.jpg",
      imageAlt: t("items.educational.imageAlt"),
      content: t.rich("items.educational.contentRich", {
        highlight: (chunks) => (
          <strong className="text-(--color-off-white)">{chunks}</strong>
        ),
      }),
    },
  ];

  return (
    <SectionWrapper id="biografia" background="dark">
      <div className="mx-auto max-w-6xl">
        <div className="animate-reveal fade-up">
          <SectionHeader
            title={t("title")}
            highlightWordsFromEnd={0}
            description={t("description")}
          />

          <div className="mt-8">
            <AlternatingFeatureList items={biographyHighlights} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Biography;