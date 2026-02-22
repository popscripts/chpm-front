"use client";

import { createPageUrl } from "@/utils/helpers";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-b from-[rgb(var(--color-deep-teal-rgb)/0.4)] via-[rgb(var(--color-deep-teal-rgb)/0.2)] to-(--color-soft-charcoal)">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-[rgb(var(--color-deep-teal-rgb)/0.6)] via-[rgb(var(--color-deep-teal-rgb)/0.3)] to-(--color-soft-charcoal) z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl animate-reveal fade-up">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-(--color-off-white) mb-6 tracking-tight">
            Chór Politechniki Morskiej
            <span className="block text-(--color-champagne-gold)">
              W Szczecinie
            </span>
          </h1>

          <p className="font-montserrat text-lg md:text-xl text-[rgb(var(--color-off-white-rgb)/0.8)] mb-10 max-w-2xl mx-auto leading-relaxed">
            pod dyrekcją prof. Sylwii Fabiańczyk-Makuch
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createPageUrl("wydarzenia")}
              className="inline-flex items-center justify-center px-8 py-4 bg-(--color-champagne-gold) text-(--color-soft-charcoal) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-[rgb(var(--color-champagne-gold-rgb)/0.9)] transition-all duration-300"
            >
              Najbliższy koncert
            </Link>
            <Link
              href={createPageUrl("wsparcie")}
              className="inline-flex items-center justify-center px-8 py-4 border border-[rgb(var(--color-off-white-rgb)/0.3)] text-(--color-off-white) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-[rgb(var(--color-off-white-rgb)/0.1)] transition-all duration-300 backdrop-blur-sm"
            >
              Wesprzyj nas
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[rgb(var(--color-off-white-rgb)/0.6)] hover:text-(--color-champagne-gold) transition-colors cursor-pointer animate-reveal fade-up"
          style={{ transitionDelay: "300ms" }}
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-(--color-soft-charcoal) to-transparent z-10" />
    </section>
  );
}
