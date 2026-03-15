import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import SectionWrapper from "../layout/SectionWrapper";

export default async function AboutPreview() {
  const t = await getTranslations("home.about");

  return (
    <SectionWrapper id="o-nas" background="tealRadial">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative isolate animate-reveal fade-left">
            <div className="relative z-10 aspect-4/5 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[rgb(var(--color-champagne-gold-rgb)/0.3)] z-0" />
          </div>

          {/* Content */}
          <div
            className="animate-reveal fade-right"
            style={{ transitionDelay: "120ms" }}
          >
            <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              {t("eyebrow")}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-6 leading-tight">
              {t.rich("headingRich", {
                highlight: (chunks) => (
                  <span className="text-(--color-champagne-gold)">{chunks}</span>
                ),
              })}
            </h2>
            <p className="text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat leading-relaxed mb-6">
              {t("body1")}
            </p>
            <p className="text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat leading-relaxed mb-8">
              {t("body2")}
            </p>

            <Link
              href="/o-nas"
              className="inline-flex items-center gap-3 text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group"
            >
              {t("cta")}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
