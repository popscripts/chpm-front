"use client";

import type { AlbumItem } from "@/data/albums";
import { getStreamingLogoByName } from "@/utils/helpers";
import { ChevronDown, ExternalLink, ListMusic } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const fallbackCoverUrl =
  "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&q=80";

type DiscographyAlbumsListProps = {
  albums: AlbumItem[];
};

const INITIAL_VISIBLE_ALBUMS = 3;
const ALBUMS_PER_PAGE = 3;

function DiscographyAlbumsList({ albums }: DiscographyAlbumsListProps) {
  const [expandedAlbumId, setExpandedAlbumId] = useState<string | null>(null);
  const [scrollReadyAlbumId, setScrollReadyAlbumId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ALBUMS);
  const scrollTimerRef = useRef<number | null>(null);
  const visibleAlbums = albums.slice(0, visibleCount);
  const canShowMore = visibleCount < albums.length;

  const getReleaseYear = (releaseDate: string) =>
    releaseDate ? releaseDate.slice(0, 4) : "";

  const toggleAlbum = (albumId: string) => {
    setExpandedAlbumId((current) => {
      const nextAlbumId = current === albumId ? null : albumId;

      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current);
        scrollTimerRef.current = null;
      }

      if (!nextAlbumId) {
        setScrollReadyAlbumId(null);
        return nextAlbumId;
      }

      setScrollReadyAlbumId(null);
      scrollTimerRef.current = window.setTimeout(() => {
        setScrollReadyAlbumId(nextAlbumId);
      }, 500);

      return nextAlbumId;
    });
  };

  useEffect(() => {
    return () => {
      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8">
      {visibleAlbums.map((album) => {
        const isExpanded = expandedAlbumId === album.id;
        const isScrollReady = scrollReadyAlbumId === album.id;
        const detailsId = `album-details-${album.id}`;

        return (
          <div
            key={album.id}
            className={`group relative ${isExpanded ? "z-30" : "z-10"} animate-reveal fade-up`}
            style={{ transitionDelay: `${visibleAlbums.indexOf(album) % 3 * 120}ms` }}
          >
            <button
              type="button"
              className="relative aspect-square w-full overflow-hidden bg-(--color-deep-teal) mb-24 text-left"
              onClick={() => toggleAlbum(album.id)}
              aria-expanded={isExpanded}
              aria-controls={detailsId}
            >
              <Image
                src={album.field_image?.url || fallbackCoverUrl}
                alt={album.field_image?.alt || album.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0  group-hover:bg-(--color-deep-teal)/30 transition-colors" />
            </button>

            <div
              id={detailsId}
              className={`absolute inset-x-0 z-40 flex overflow-hidden bg-(--color-soft-charcoal) transition-all duration-500 ease-out ${
                isExpanded ? "top-0 h-full" : "top-[calc(100%-6rem)] h-24"
              }`}
              aria-hidden={false}
            >
              <div className="flex  w-full flex-col">
                <button
                  type="button"
                  className="flex min-h-24 w-full items-center justify-between border-b border-(--color-off-white)/10 px-4 py-4 text-left"
                  onClick={() => toggleAlbum(album.id)}
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                >
                  <div>
                    <h3 className="font-playfair text-2xl text-(--color-off-white) group-hover:text-(--color-champagne-gold) transition-colors mb-1">
                      {album.title}
                    </h3>
                    <p className="text-(--color-off-white)/50 font-montserrat text-sm">
                      {getReleaseYear(album.field_release_date)}
                    </p>
                  </div>
                  <ChevronDown
                    size={22}
                    className={`text-(--color-off-white)/70 transition-transform duration-300`}
                  />
                </button>

                <div
                  className={`min-h-0 flex-1 px-4 pb-4 pt-3 [scrollbar-gutter:stable] ${
                    isExpanded && isScrollReady ? "overflow-y-auto" : "overflow-y-hidden"
                  }`}
                  onClick={() => {
                    if (isExpanded) {
                      toggleAlbum(album.id);
                    }
                  }}
                >
                  {album.field_streaming_platforms.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {album.field_streaming_platforms.map((platform) => {
                        const StreamingLogo = getStreamingLogoByName(platform.field_platform);

                        return (
                          <a
                            key={platform.id}
                            href={platform.field_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-(--color-champagne-gold) flex items-center justify-center hover:bg-(--color-champagne-gold)/80 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title={platform.field_platform || "Streaming"}
                            aria-label={platform.field_platform || "Streaming"}
                          >
                            {StreamingLogo ? (
                              <StreamingLogo
                                size={20}
                                fill="var(--color-soft-charcoal)"
                                className="hover:fill-(--color-soft-charcoal)"
                              />
                            ) : (
                              <ExternalLink
                                size={20}
                                className="text-(--color-soft-charcoal)"
                              />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  )}

                  {album.field_description && (
                    <p className="text-(--color-off-white)/60 font-montserrat text-sm leading-relaxed whitespace-pre-line">
                      {album.field_description}
                    </p>
                  )}
                  {album.field_pieces.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3 mt-4">
                        <ListMusic size={14} className="text-(--color-champagne-gold)" />
                        <span className="text-(--color-champagne-gold) font-montserrat text-xs uppercase tracking-wider">
                          Lista utworów
                        </span>
                      </div>
                      <ol className="space-y-1">
                        {album.field_pieces.map((track, i) => (
                          <li
                            key={track.id}
                            className="flex items-center gap-3 text-(--color-off-white)/60 font-montserrat text-sm"
                          >
                            <span className="text-(--color-champagne-gold)/50 text-xs w-4 text-right shrink-0">
                              {i + 1}
                            </span>
                            <span>{track.title}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>

      {canShowMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="flex items-center border border-(--color-champagne-gold) px-6 py-3 font-montserrat text-sm uppercase tracking-[0.2em] text-(--color-champagne-gold) transition-colors hover:bg-(--color-champagne-gold) hover:text-(--color-soft-charcoal)"
            onClick={() => setVisibleCount((current) => current + ALBUMS_PER_PAGE)}
          >
            Pokaż więcej <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default DiscographyAlbumsList;
