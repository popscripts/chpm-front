"use client";

import { createPageUrl } from "@/utils/helpers";
import { ChevronUp, Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const VISIBILITY_SCROLL_Y = 320;

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > VISIBILITY_SCROLL_Y);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-0 bottom-5 md:right-8 md:bottom-8 z-40 flex flex-col items-end gap-3">
      <Link
        href={createPageUrl("wsparcie")}
        aria-label="Przejdz do strony wsparcia"
        className={`inline-flex h-11 items-center gap-2 rounded-full border border-[rgb(var(--color-off-white-rgb)/0.25)] bg-[rgb(var(--color-soft-charcoal-rgb)/0.85)] px-4 text-[rgb(var(--color-off-white-rgb)/0.8)] shadow-[0_8px_24px_rgb(var(--color-soft-charcoal-rgb)/0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-champagne-gold) hover:text-(--color-champagne-gold) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-champagne-gold) ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <span className="font-montserrat text-xs font-semibold uppercase tracking-wider">
          Wesprzyj nas
        </span>
        <Heart size={16} />
      </Link>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Wroc na gore strony"
        title="Wroc na gore"
        className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(var(--color-off-white-rgb)/0.25)] bg-[rgb(var(--color-soft-charcoal-rgb)/0.85)] text-[rgb(var(--color-off-white-rgb)/0.8)] shadow-[0_8px_24px_rgb(var(--color-soft-charcoal-rgb)/0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-champagne-gold) hover:text-(--color-champagne-gold) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-champagne-gold) ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}