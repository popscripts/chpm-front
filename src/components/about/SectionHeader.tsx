import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`.trim()}>
      {eyebrow ? (
        <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-6">
        {title}
      </h2>
      {description ? (
        <p className="text-(--color-off-white)/70 font-montserrat">
          {description}
        </p>
      ) : null}
    </div>
  );
}
