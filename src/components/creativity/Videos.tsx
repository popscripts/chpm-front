import SectionWrapper from "../layout/SectionWrapper";
import MusicVideosList from "../ui/MusicVideosList";
import SectionHeader from "../ui/SectionHeader";
import { getTranslations } from "next-intl/server";

async function Videos() {
  const t = await getTranslations("creativityPage.videos");

  return (
    <SectionWrapper
      id="teledyski"
      background="tealRadial"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          className="mb-8"
        />
        <MusicVideosList />
      </div>
    </SectionWrapper>
  );
}

export default Videos;
