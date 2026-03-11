import { fetchMusicVideos } from "@/data/musicVideos";
import { Play } from "lucide-react";
import Image from "next/image";

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

export default async function MusicVideos() {
  const videosFromApi = await fetchMusicVideos();
  const videos = videosFromApi;

  return (
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
  );
}
