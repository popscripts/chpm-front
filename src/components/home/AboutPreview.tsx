"use client";

import { createPageUrl } from '@/utils/helpers';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="bg-radial from-[var(--color-deep-teal-dark)] to-[var(--color-soft-charcoal)] py-24 px-6 inset-shadow-[0_10px_60px_-15px_var(--color-soft-charcoal)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                alt="Chór podczas próby"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[rgb(var(--color-champagne-gold-rgb)/0.3)] -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[var(--color-champagne-gold)] font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              O nas
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[var(--color-off-white)] mb-6 leading-tight">
              Trzy dekady
              <span className="text-[var(--color-champagne-gold)]"> doskonałości</span>
            </h2>
            <p className="text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat leading-relaxed mb-6">
              Od ponad 30 lat tworzymy przestrzeń, w której muzyka chóralna staje się 
              niezapomnianym przeżyciem. Nasz zespół to połączenie pasji, profesjonalizmu 
              i nieustannego dążenia do perfekcji.
            </p>
            <p className="text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat leading-relaxed mb-8">
              Zdobyliśmy uznanie na scenach całej Europy, zdobywając nagrody na najbardziej 
              prestiżowych festiwalach muzyki chóralnej. Każdy koncert to dla nas spotkanie 
              z publicznością, która dzieli naszą miłość do harmonii.
            </p>

            <Link
              href={createPageUrl('About')}
              className="inline-flex items-center gap-3 text-[var(--color-champagne-gold)] font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group"
            >
              Zobacz więcej
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}