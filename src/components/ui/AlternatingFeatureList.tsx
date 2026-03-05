import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

export type AlternatingFeatureItem = {
  title: string;
  content: ReactNode;
  image: string;
  imageAlt?: string;
  icon?: LucideIcon;
};

type AlternatingFeatureListProps = {
  items: AlternatingFeatureItem[];
  imageSizes?: string;
  className?: string;
};

function AlternatingFeatureList({
  items,
  imageSizes = "(min-width: 1024px) 360px, (min-width: 768px) 320px, 90vw",
  className = "",
}: AlternatingFeatureListProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={`space-y-12 md:space-y-20 ${className}`.trim()}>
      {items.map((item, index) => {
        const isReversed = index % 2 === 1;

        return (
          <div key={`${item.title}-${index}`}>
            <article
              className={`grid gap-8 md:grid-cols-[2fr_3fr] items-start text-left animate-reveal fade-up ${
                isReversed ? "md:grid-cols-[3fr_2fr]" : ""
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div
                className={`relative aspect-4/3 overflow-hidden bg-(--color-deep-teal)/20 mb-5 ${
                  isReversed ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  fill
                  sizes={imageSizes}
                  className="object-cover"
                />
              </div>

              <div className={isReversed ? "md:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  {item.icon ? (
                    <div className="w-10 h-10 flex items-center justify-center bg-(--color-champagne-gold)/15 text-(--color-champagne-gold)">
                      <item.icon size={20} />
                    </div>
                  ) : null}
                  <h3 className="font-playfair text-3xl text-(--color-off-white)">
                    {item.title}
                  </h3>
                </div>

                <div className="text-(--color-off-white)/70 font-montserrat leading-relaxed">
                  {item.content}
                </div>
              </div>
            </article>

            {index < items.length - 1 ? (
              <div className="mt-12 md:mt-16">
                <div className="relative h-px w-full bg-linear-to-r from-transparent via-(--color-champagne-gold)/50 to-transparent" />
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-(--color-champagne-gold) shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default AlternatingFeatureList;
