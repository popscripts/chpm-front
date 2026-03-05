import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  highlightWordsFromEnd?: number;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  highlightWordsFromEnd = 1,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const trimmedTitle = title.trim();
  const titleWords = trimmedTitle.length ? trimmedTitle.split(/\s+/) : [];
  const normalizedHighlightCount = Math.max(
    0,
    Math.floor(highlightWordsFromEnd),
  );
  const splitIndex = Math.max(0, titleWords.length - normalizedHighlightCount);
  const titlePrefix = titleWords.slice(0, splitIndex).join(" ");
  const highlightedSuffix = titleWords.slice(splitIndex).join(" ");

  return (
    <div className={`${alignClass} ${className}`.trim()}>
      {eyebrow ? (
        <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-6">
        {titlePrefix}
        {titlePrefix && highlightedSuffix ? " " : null}
        {highlightedSuffix ? (
          <span className="text-(--color-champagne-gold)">{highlightedSuffix}</span>
        ) : null}
      </h2>
      {description ? (
        <p className="text-(--color-off-white)/70 font-montserrat">
          {description}
        </p>
      ) : null}
    </div>
  );
}
