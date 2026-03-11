import type { ReactNode } from "react";

type SectionBackground = "dark" | "tealRadial" | "tealLinear";

type SectionWrapperProps = {
  children: ReactNode;
  id?: string;
  background?: SectionBackground;
  className?: string;
};

const backgroundClassMap: Record<SectionBackground, string> = {
  dark: "bg-(--color-soft-charcoal)",
  tealRadial:
    "bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal)",
  tealLinear:
    "bg-linear-to-b from-(--color-soft-charcoal) to-(--color-deep-teal-medium)",
};

function SectionWrapper({
  children,
  id,
  background = "dark",
  className = "",
}: SectionWrapperProps) {
  const sectionClassName = [
    "scroll-mt-32 py-24 px-6",
    backgroundClassMap[background],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName}>
      {children}
    </section>
  );
}

export default SectionWrapper;
