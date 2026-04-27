import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import { fetchMusicVideos } from "@/data/musicVideos";
import MusicVideosList from "@/components/ui/MusicVideosList";
import { getTranslations } from "next-intl/server";

async function Videos() {
  const t = await getTranslations("creativityPage.videos");
  const videos = await fetchMusicVideos();

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
        <MusicVideosList videos={videos} />
      </div>
    </SectionWrapper>
  );
}

export default Videos;
