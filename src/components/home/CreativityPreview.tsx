import { fetchAlbums } from "@/data/albums";
import { createPageUrl } from "@/utils/helpers";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DiscographyAlbumsList from "../ui/DiscographyAlbumsList";
import MusicVideosList from "../ui/MusicVideosList";
import SectionHeader from "../ui/SectionHeader";

const albums = [
  {
    id: 1,
    title: "Sacrum",
    year: 2024,
    cover:
      "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&q=80",
  },
  {
    id: 2,
    title: "Polska Pieśń",
    year: 2022,
    cover:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&q=80",
  },
  {
    id: 3,
    title: "Kolędy",
    year: 2020,
    cover:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80",
  },
];

export default async function CreativityPreview() {
    const albums = await fetchAlbums();
  return (
    <section id="tworczosc" className="scroll-mt-32 bg-(--color-soft-charcoal) py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Twórczość" title="Posłuchaj naszych utworów" description="Tworzymy teledyski, albumy, nagrywamy w profesjonalnych studiach" />

        <MusicVideosList />
        <DiscographyAlbumsList albums={albums} />

        {/* Streaming links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-reveal fade-up">
          <span className="text-[rgb(var(--color-off-white-rgb)/0.5)] font-montserrat text-sm uppercase tracking-wider">
            Słuchaj na:
          </span>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) transition-colors font-montserrat"
            >
              Spotify
            </a>
            <a
              href="#"
              className="text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) transition-colors font-montserrat"
            >
              Apple Music
            </a>
            <a
              href="#"
              className="text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) transition-colors font-montserrat"
            >
              YouTube Music
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={createPageUrl("tworczosc")}
            className="inline-flex items-center gap-3 text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group"
          >
            Zobacz pełną twórczość
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
