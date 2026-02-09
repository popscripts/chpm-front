"use client";

import { createPageUrl } from "@/utils/helpers";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function SupportPreview() {
  return (
    <section className="bg-linear-to-b from-(--color-soft-charcoal) via-(--color-deep-teal-dark) to-(--color-deep-teal-medium) py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-[rgb(var(--color-champagne-gold-rgb)/0.1)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 border border-[rgb(var(--color-champagne-gold-rgb)/0.1)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 border border-[rgb(var(--color-champagne-gold-rgb)/0.1)] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-[rgb(var(--color-champagne-gold-rgb)/0.1)] flex items-center justify-center mx-auto mb-8">
            <Heart size={40} className="text-(--color-champagne-gold)" />
          </div>

          <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
            Wesprzyj nas
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-6 leading-tight">
            Zostań Patronem{" "}
            <span className="text-(--color-champagne-gold)">Harmonii</span>
          </h2>
          <p className="text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat leading-relaxed mb-10 max-w-2xl mx-auto">
            Dzięki wsparciu naszych Patronów możemy rozwijać działalność
            artystyczną, nagrywać nowe płyty i występować na międzynarodowych
            scenach. Każda złotówka przybliża nas do kolejnych muzycznych
            marzeń.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg mx-auto">
            <div>
              <span className="block font-playfair text-4xl text-(--color-champagne-gold)">
                127
              </span>
              <span className="text-[rgb(var(--color-off-white-rgb)/0.5)] font-montserrat text-sm">
                Patronów
              </span>
            </div>
            <div>
              <span className="block font-playfair text-4xl text-(--color-champagne-gold)">
                30+
              </span>
              <span className="text-[rgb(var(--color-off-white-rgb)/0.5)] font-montserrat text-sm">
                Lat tradycji
              </span>
            </div>
            <div>
              <span className="block font-playfair text-4xl text-(--color-champagne-gold)">
                500+
              </span>
              <span className="text-[rgb(var(--color-off-white-rgb)/0.5)] font-montserrat text-sm">
                Koncertów
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://patronite.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-(--color-champagne-gold) text-(--color-soft-charcoal) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-[rgb(var(--color-champagne-gold-rgb)/0.9)] transition-all duration-300"
            >
              <Heart size={18} className="mr-2" />
              Wesprzyj na Patronite
            </a>
            <Link
              href={createPageUrl("Support")}
              className="inline-flex items-center justify-center px-8 py-4 border border-[rgb(var(--color-off-white-rgb)/0.3)] text-(--color-off-white) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-[rgb(var(--color-off-white-rgb)/0.1)] transition-all duration-300"
            >
              Ściana Wdzięczności
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
