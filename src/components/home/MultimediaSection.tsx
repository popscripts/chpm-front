"use client";

import { createPageUrl } from '@/utils/helpers';
import { motion } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const sampleVideos = [
  {
    id: 1,
    title: "Raj Kaczmarskiego",
    url: "https://www.youtube.com/watch?v=TUAsVo1v36Q"
  },
  {
    id: 2,
    title: "I'll be there for you / With a little help from my friends",
    url: "https://www.youtube.com/watch?v=3JWVOPaRml8"
  },
  {
    id: 3,
    title: "Samoloty",
    url: "https://www.youtube.com/watch?v=CrwffZHXjhg"
  },
  {
    id: 4,
    title: "Solitude Love Song",
    url: "https://www.youtube.com/watch?v=eYctURBtiig"
  }
];

const getYoutubeId = (url: string) => {
  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1]?.split(/[?&]/)[0] ?? '';
  }
  const match = url.match(/[?&]v=([^&]+)/);
  return match?.[1] ?? '';
};

const getYoutubeThumb = (url: string) => {
  const id = getYoutubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
};

export default function MultimediaSection() {
  const [activeVideo, setActiveVideo] = useState<(typeof sampleVideos)[number] | null>(null);

  return (
    <section className="bg-radial from-[var(--color-deep-teal-dark)] to-[var(--color-soft-charcoal)] py-24 px-6 relative ">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-champagne-gold-dark)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-champagne-gold-dark)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-champagne-gold)] font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
            Multimedia
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-[var(--color-off-white)] leading-tight">
            Nasze wykonania
          </h2>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sampleVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden bg-[var(--color-soft-charcoal)]">
                <img
                  src={getYoutubeThumb(video.url)}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[rgb(var(--color-deep-teal-rgb)/0.4)] group-hover:bg-[rgb(var(--color-deep-teal-rgb)/0.2)] transition-colors duration-300" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[var(--color-champagne-gold)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-[var(--color-soft-charcoal)] ml-1" fill="var(--color-soft-charcoal)" />
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-lg text-[var(--color-off-white)] mt-4 group-hover:text-[var(--color-champagne-gold)] transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={createPageUrl('Creativity')}
            className="inline-flex items-center gap-3 text-[var(--color-champagne-gold)] font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group"
          >
            Zobacz wszystkie nagrania
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgb(var(--color-soft-charcoal-rgb)/0.95)]"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-[var(--color-off-white)] hover:text-[var(--color-champagne-gold)] transition-colors"
            >
              <X size={32} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${getYoutubeId(activeVideo.url)}?autoplay=1`}
              title={activeVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}