"use client";

import { createPageUrl } from "@/utils/helpers";
import { motion } from "framer-motion";
import { ArrowRight, Headphones } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function CreativityPreview() {
  return (
    <section className="bg-(--color-soft-charcoal) py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
            Twórczość
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) leading-tight mb-6">
            Nasza dyskografia
          </h2>
          <p className="text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat max-w-2xl mx-auto">
            Słuchaj naszych albumów na ulubionych platformach streamingowych
          </p>
        </motion.div>

        {/* Albums */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[rgb(var(--color-deep-teal-rgb)/0.4)] group-hover:bg-[rgb(var(--color-deep-teal-rgb)/0.2)] transition-colors duration-300" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-(--color-champagne-gold) flex items-center justify-center hover:bg-[rgb(var(--color-champagne-gold-rgb)/0.8)] transition-colors">
                      <Headphones
                        size={20}
                        className="text-(--color-soft-charcoal)"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-xl text-(--color-off-white) group-hover:text-(--color-champagne-gold) transition-colors">
                {album.title}
              </h3>
              <p className="text-[rgb(var(--color-off-white-rgb)/0.5)] font-montserrat text-sm">
                {album.year}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Streaming links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
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
        </motion.div>

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
