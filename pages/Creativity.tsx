"use client";

import { motion } from "framer-motion";
import { ExternalLink, Headphones, Play, X } from "lucide-react";
import { useState } from "react";

const streamingPlatforms = [
  { name: "Spotify", url: "https://spotify.com", icon: "🎵" },
  { name: "Apple Music", url: "https://music.apple.com", icon: "🍎" },
  { name: "YouTube Music", url: "https://music.youtube.com", icon: "▶️" },
  { name: "Deezer", url: "https://deezer.com", icon: "🎧" },
];

const placeholderAlbums = [
  {
    id: "a-2024-swiatlo",
    title: "Swiatlo i Cisza",
    year: "2024",
    description: "Album laczacy muzyke sakralna z nowoczesnymi aranżacjami.",
    cover_url:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80",
    spotify_url: "https://open.spotify.com",
    apple_music_url: "https://music.apple.com",
  },
  {
    id: "a-2022-harmonia",
    title: "Harmonia",
    year: "2022",
    description: "Kolekcja utworow chóralnych inspirowanych polska tradycja.",
    cover_url:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&q=80",
    spotify_url: "https://open.spotify.com",
    apple_music_url: "",
  },
  {
    id: "a-2020-nova",
    title: "Nova",
    year: "2020",
    description:
      "Eksperymentalny album z elementami elektroniki i glosow solowych.",
    cover_url:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80",
    spotify_url: "",
    apple_music_url: "https://music.apple.com",
  },
];

const placeholderVideos = [
  {
    id: "v-2025-echoes",
    title: "Echoes of Spring (Live)",
    description: "Nagranie z koncertu plenerowego w Krakowie.",
    youtube_url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail_url: "",
  },
  {
    id: "v-2024-nocturne",
    title: "Nocturne - Studio Session",
    description: "Sesja studyjna z orkiestra kameralna.",
    youtube_url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    thumbnail_url: "",
  },
  {
    id: "v-2023-chorus",
    title: "Chorus of Light",
    description: 'Wideoklip promujacy album "Swiatlo i Cisza".',
    youtube_url: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    thumbnail_url: "",
  },
];

export default function Creativity() {
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
    description: string;
    youtube_url: string;
    thumbnail_url: string;
  } | null>(null);

  const albums = placeholderAlbums;
  const videos = placeholderVideos;

  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="bg-(--color-soft-charcoal) min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden bg-gradient-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal)">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80"
            alt="Twórczość"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-(--color-deep-teal)/80 to-(--color-soft-charcoal)" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
              Twórczość
            </h1>
            <p className="font-montserrat text-lg text-(--color-off-white)/70">
              Nasza muzyka dostępna na wszystkich platformach
            </p>
          </motion.div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-16 px-6 bg-gradient-to-b from-(--color-deep-teal)/20 to-(--color-soft-charcoal) shadow-[0_10px_40px_-15px_rgba(0,56,77,0.3)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl text-(--color-off-white) mb-4">
              Słuchaj{" "}
              <span className="text-(--color-champagne-gold)">online</span>
            </h2>
            <p className="text-(--color-off-white)/60 font-montserrat">
              Nasza muzyka dostępna na wszystkich popularnych platformach
              streamingowych
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {streamingPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 border border-(--color-off-white)/20 hover:border-(--color-champagne-gold) bg-(--color-deep-teal)/10 backdrop-blur-sm hover:bg-(--color-deep-teal)/20 transition-all text-center shadow-lg"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <span className="font-montserrat text-(--color-off-white) group-hover:text-(--color-champagne-gold) transition-colors">
                  {platform.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Discography */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              Dyskografia
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white)">
              Nasze albumy
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden bg-(--color-deep-teal) mb-4">
                  <img
                    src={
                      album.cover_url ||
                      `https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&q=80`
                    }
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-(--color-deep-teal)/50 group-hover:bg-(--color-deep-teal)/30 transition-colors" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-3">
                      {album.spotify_url && (
                        <a
                          href={album.spotify_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-(--color-champagne-gold) flex items-center justify-center hover:bg-(--color-champagne-gold)/80 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Headphones
                            size={20}
                            className="text-(--color-soft-charcoal)"
                          />
                        </a>
                      )}
                      {album.apple_music_url && (
                        <a
                          href={album.apple_music_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-(--color-champagne-gold) flex items-center justify-center hover:bg-(--color-champagne-gold)/80 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink
                            size={20}
                            className="text-(--color-soft-charcoal)"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <h3 className="font-playfair text-2xl text-(--color-off-white) group-hover:text-(--color-champagne-gold) transition-colors mb-2">
                  {album.title}
                </h3>
                <p className="text-(--color-off-white)/50 font-montserrat text-sm mb-3">
                  {album.year}
                </p>
                {album.description && (
                  <p className="text-(--color-off-white)/60 font-montserrat text-sm leading-relaxed">
                    {album.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-24 px-6 bg-gradient-to-b from-(--color-soft-charcoal) via-(--color-deep-teal)/20 to-(--color-soft-charcoal) shadow-[0_10px_60px_-15px_rgba(0,56,77,0.4)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              Multimedia
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white)">
              Nagrania wideo
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => {
              const videoId = getYouTubeId(video.youtube_url);
              const thumbnail =
                video.thumbnail_url ||
                `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setActiveVideo(video)}
                >
                  <div className="relative aspect-video overflow-hidden bg-(--color-soft-charcoal) mb-4">
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-(--color-deep-teal)/60 group-hover:bg-(--color-deep-teal)/40 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-(--color-champagne-gold) flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play
                          size={24}
                          className="text-(--color-soft-charcoal) ml-1"
                          fill="#1A1A1A"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl text-(--color-off-white) group-hover:text-(--color-champagne-gold) transition-colors">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-(--color-off-white)/60 font-montserrat text-sm mt-2">
                      {video.description}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-(--color-soft-charcoal)/95 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-(--color-off-white) hover:text-(--color-champagne-gold) transition-colors"
            >
              <X size={32} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo.youtube_url)}?autoplay=1`}
              title={activeVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
