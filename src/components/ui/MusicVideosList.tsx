"use client";

import type { MusicVideoItem } from "@/data/musicVideos";
import { ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

const getYoutubeId = (url: string) => {
  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1]?.split(/[?&]/)[0] ?? "";
  }

  const match = url.match(/[?&]v=([^&]+)/);
  return match?.[1] ?? "";
};

const getYoutubeThumb = (url: string) => {
  const id = getYoutubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
};

const fallbackThumb =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80";

const INITIAL_VISIBLE_VIDEOS = 4;
const VIDEOS_PER_PAGE = 4;

type MusicVideosListProps = {
  videos: MusicVideoItem[];
  canExpand?: boolean;
};

export default function MusicVideosList({
  videos,
  canExpand = true,
}: MusicVideosListProps) {
  const t = useTranslations("creativityPage.videos");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_VIDEOS);
  const visibleVideos = videos.slice(0, visibleCount);
  const canShowMore = canExpand && visibleCount < videos.length;

  if (!videos.length) {
    return null;
  }

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {visibleVideos.map((video, index) => (
          <a
            key={video.id}
            href={video.field_link?.uri ?? "#"}
            className="group animate-reveal fade-up cursor-pointer"
            style={{ transitionDelay: `${(index % 4) * 120}ms` }}
          >
            <div className="relative aspect-video overflow-hidden bg-(--color-soft-charcoal)">
              <Image
                src={
                  video.field_link?.uri
                    ? getYoutubeThumb(video.field_link.uri) || fallbackThumb
                    : fallbackThumb
                }
                alt={video.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[rgb(var(--color-deep-teal-rgb)/0.4)] transition-colors duration-300 group-hover:bg-[rgb(var(--color-deep-teal-rgb)/0.2)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center bg-(--color-champagne-gold) transition-transform duration-300 group-hover:scale-110">
                  <Play
                    size={24}
                    fill="var(--color-soft-charcoal)"
                    className="ml-1 text-(--color-soft-charcoal)"
                  />
                </div>
              </div>
            </div>
            <h3 className="mt-4 font-playfair text-lg text-(--color-off-white) transition-colors group-hover:text-(--color-champagne-gold)">
              {video.title}
            </h3>
          </a>
        ))}
      </div>

      {canShowMore ? (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="flex cursor-pointer items-center border border-(--color-champagne-gold) px-6 py-3 font-montserrat text-sm uppercase tracking-[0.2em] text-(--color-champagne-gold) transition-colors hover:bg-(--color-champagne-gold) hover:text-(--color-soft-charcoal)"
            onClick={() =>
              setVisibleCount((current) => current + VIDEOS_PER_PAGE)
            }
          >
            {t("showMore")} <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
}