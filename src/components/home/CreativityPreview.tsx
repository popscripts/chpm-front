import { Link } from "@/i18n/navigation";
import { fetchMusicVideos } from "@/data/musicVideos";
import { STREAMING_PLATFORMS } from "@/utils/constants";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import MusicVideosList from "@/components/ui/MusicVideosList";

export default async function CreativityPreview() {
  const t = await getTranslations("home.creativity");
  const videos = await fetchMusicVideos();

  return (
    <SectionWrapper id="tworczosc" background="tealRadial">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("heading")}
          description={t("description")}
          className="mb-8"
        />

        <MusicVideosList videos={videos} canExpand={false} />

        {/* Streaming links */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 mt-12 mb-12 animate-reveal fade-up">
          <span className="text-[rgb(var(--color-off-white-rgb)/0.5)] font-montserrat text-sm uppercase tracking-wider">
            {t("listenOn")}
          </span>
           {STREAMING_PLATFORMS.map((platform) => 
            {
              const Icon = platform.icon;
            return (<a
              key={platform.name}
              href={platform.url}
              className="text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) transition-colors font-montserrat"
            >
              <Icon size={30} fill="currentColor" className="inline-block mr-2" />
            </a>)
          })}
        </div>
        {/* CTA */}
        <div className="text-center">
          <Link
            href="/tworczosc"
            className="inline-flex items-center gap-3 text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group"
          >
            {t("cta")}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
