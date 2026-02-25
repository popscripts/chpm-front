"use client";

import { ChevronDown, ExternalLink, Headphones } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { AlbumItem } from "@/data/albums";

const fallbackCoverUrl =
  "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&q=80";

type DiscographyAlbumsListProps = {
  albums: AlbumItem[];
};

function DiscographyAlbumsList({ albums }: DiscographyAlbumsListProps) {
  const [expandedAlbumId, setExpandedAlbumId] = useState<string | null>(null);

  const getReleaseYear = (releaseDate: string) =>
    releaseDate ? releaseDate.slice(0, 4) : "";

  const toggleAlbum = (albumId: string) => {
    setExpandedAlbumId((current) => (current === albumId ? null : albumId));
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {albums.map((album) => {
        const isExpanded = expandedAlbumId === album.id;

        return (
          <div
            key={album.id}
            className={`group relative ${isExpanded ? "z-30" : "z-10"}`}
          >
            <div className="relative aspect-square overflow-hidden bg-(--color-deep-teal) mb-4">
              <Image
                src={album.field_image?.url || fallbackCoverUrl}
                alt={album.field_image?.alt || album.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-(--color-deep-teal)/50 group-hover:bg-(--color-deep-teal)/30 transition-colors" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-3">
                  {album.field_streaming_platforms.map((platform) => (
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
                      {platform.field_platform.toLowerCase().includes("spotify") ? (
                        <Headphones
                          size={20}
                          className="text-(--color-soft-charcoal)"
                        />
                      ) : (
                        <ExternalLink
                          size={20}
                          className="text-(--color-soft-charcoal)"
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-between text-left"
              onClick={() => toggleAlbum(album.id)}
              aria-expanded={isExpanded}
              aria-controls={`album-details-${album.id}`}
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
                className={`text-(--color-off-white)/70 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            <div
              id={`album-details-${album.id}`}
              className={`absolute left-0 right-0 top-full z-40 transition-all duration-300 ease-out ${
                isExpanded
                  ? "opacity-100 translate-y-3 pointer-events-auto"
                  : "opacity-0 translate-y-0 pointer-events-none"
              }`}
            >
              <div className="bg-(--color-deep-teal-dark)/95 border border-(--color-off-white)/15 p-4 backdrop-blur-sm">
                {album.field_description && (
                  <p className="text-(--color-off-white)/60 font-montserrat text-sm leading-relaxed">
                    {album.field_description}
                  </p>
                )}
                {album.field_pieces.length > 0 && (
                  <ul className="mt-4 space-y-1 text-(--color-off-white)/60 font-montserrat text-sm leading-relaxed">
                    {album.field_pieces.map((piece) => (
                      <li key={piece.id}>• {piece.title}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DiscographyAlbumsList;
