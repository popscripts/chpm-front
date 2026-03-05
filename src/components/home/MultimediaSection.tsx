import { fetchMusicVideos, type MusicVideoItem } from "@/data/musicVideos";
import { createPageUrl } from "@/utils/helpers";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";

const sampleVideos: MusicVideoItem[] = [
  {
    id: "v-1",
    title: "Powrót - Raj Kaczmarskiego",
    field_description: null,
    field_release_date: "2025-12-13",
    field_link: {
      uri: "https://www.youtube.com/watch?v=TUAsVo1v36Q",
      title: "",
    },
  },
  {
    id: "v-2",
    title: "I'll be there for you / With a little help from my friends",
    field_description: null,
    field_release_date: "2025-12-02",
    field_link: {
      uri: "https://www.youtube.com/watch?v=3JWVOPaRml8",
      title: "",
    },
  },
  {
    id: "v-3",
    title: "Samoloty",
    field_description: null,
    field_release_date: "2024-10-29",
    field_link: {
      uri: "https://www.youtube.com/watch?v=CrwffZHXjhg",
      title: "",
    },
  },
  {
    id: "v-4",
    title: "Solitude Love Song",
    field_description: null,
    field_release_date: "2023-02-20",
    field_link: {
      uri: "https://www.youtube.com/watch?v=eYctURBtiig",
      title: "",
    },
  },
];

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

export default async function MultimediaSection() {
  const videosFromApi = await fetchMusicVideos();
  const videos = videosFromApi.length > 0 ? videosFromApi : sampleVideos;

  return (
    <section className="bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal) py-24 px-6 relative">
      {/* Decorative background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-50 -left-50 w-200 h-200 bg-radial from-(--color-champagne-gold-dark) via-transparent to-transparent" />
        <div className="absolute -bottom-50 -right-50 w-200 h-200 bg-radial from-(--color-champagne-gold-dark) via-transparent to-transparent" />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader title="Zobacz i posłuchaj" eyebrow="Teledyski" />

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {videos.map((video, index) => (
            <a
              key={video.id}
              href={video.field_link?.uri ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer animate-reveal fade-up"
              style={{ transitionDelay: `${index * 90}ms` }}
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
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[rgb(var(--color-deep-teal-rgb)/0.4)] group-hover:bg-[rgb(var(--color-deep-teal-rgb)/0.2)] transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-(--color-champagne-gold) flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play
                      size={24}
                      className="text-(--color-soft-charcoal) ml-1"
                      fill="var(--color-soft-charcoal)"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-lg text-(--color-off-white) mt-4 group-hover:text-(--color-champagne-gold) transition-colors">
                {video.title}
              </h3>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-reveal fade-up">
          <Link
            href={createPageUrl("tworczosc")}
            className="inline-flex items-center gap-3 text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group"
          >
            Zobacz wszystkie nagrania
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
