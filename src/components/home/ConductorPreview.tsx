"use client";

import { createPageUrl } from '@/utils/helpers';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

export default function ConductorPreview() {
  return (
    <section className="bg-radial from-[var(--color-deep-teal-dark)] to-[var(--color-soft-charcoal)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <span className="text-[var(--color-champagne-gold)] font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              Dyrygent
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[var(--color-off-white)] mb-6 leading-tight">
              prof. Sylwia Fabiańczyk-Makuch
            </h2>
            
            {/* Quote */}
            <div className="relative mb-8">
              <Quote size={48} className="text-[rgb(var(--color-champagne-gold-rgb)/0.2)] absolute -top-4 -left-4" />
              <p className="text-[rgb(var(--color-off-white-rgb)/0.8)] font-playfair text-xl italic leading-relaxed pl-8">
                Muzyka chóralna to sztuka wspólnego oddychania. Kiedy dziesiątki głosów 
                stają się jednym, dzieje się magia, której nie da się opisać słowami.
              </p>
            </div>

            <p className="text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat leading-relaxed mb-8">
              Z wykształceniem zdobytym w Akademii Muzycznej w Warszawie i wieloletnim 
              doświadczeniem na europejskich scenach, prowadzi nasz zespół ku najwyższym 
              artystycznym szczytom od ponad 15 lat.
            </p>

            <Link
              href={createPageUrl('Conductor')}
              className="inline-flex items-center gap-3 text-[var(--color-champagne-gold)] font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group"
            >
              Poznaj historię
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden shadow-[0_10px_80px_0px_var(--color-champagne-gold-dark)]">
              <img
                src="assets/images/Sylwia_Fabiańczyk-Makuch.jpg"
                alt="Sylwia Fabiańczyk-Makuch - Dyrygent"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-champagne-gold-dark)] via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[rgb(var(--color-champagne-gold-rgb)/0.3)] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}