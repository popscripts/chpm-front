import SectionWrapper from "@/components/layout/SectionWrapper";
import { ExternalLink } from "lucide-react";

const joinUsHighlights = [
  {
    title: "Próby",
    description:
      "Regularna praca z zespołem, wspólne rozwijanie warsztatu i muzyczna dyscyplina bez zadęcia.",
  },
  {
    title: "Scena",
    description:
      "Koncerty, nagrania i ambitne projekty, które pozwalają realnie poczuć energię wspólnego brzmienia.",
  },
  {
    title: "Zespół",
    description:
      "Ludzie, których łączy wrażliwość, zaangażowanie i satysfakcja z tworzenia czegoś większego razem.",
  },
];

function JoinUs() {
  return (
    <SectionWrapper
      id="dolacz-do-nas"
      background="tealLinear"
      className="relative overflow-hidden pb-20"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgb(var(--color-champagne-gold-rgb)/0.1)]" />
        <div className="absolute top-1/2 left-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgb(var(--color-champagne-gold-rgb)/0.1)]" />
        <div className="absolute top-1/2 left-1/2 h-50 w-50 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgb(var(--color-champagne-gold-rgb)/0.1)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl pt-4">
        <div className="animate-reveal fade-up text-center">

          <span className="mb-4 block font-montserrat text-sm uppercase tracking-[0.3em] text-(--color-champagne-gold)">
            Nabór
          </span>
          <h2 className="mb-6 font-playfair text-4xl leading-tight text-(--color-off-white) md:text-5xl">
            Dołącz
            <span className="text-(--color-champagne-gold)"> do nas</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl font-montserrat leading-relaxed text-[rgb(var(--color-off-white-rgb)/0.7)]">
            Szukamy osób, które chcą śpiewać, rozwijać się muzycznie i
            współtworzyć zespół obecny na scenach w kraju i za granicą. Jeśli
            masz w sobie wrażliwość, energię i chęć pracy we wspólnym
            brzmieniu, odezwij się do nas.
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {joinUsHighlights.map((item, index) => (
              <div
                key={item.title}
                className="animate-reveal fade-up"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="block font-playfair text-3xl text-(--color-champagne-gold)">
                  {item.title}
                </span>
                <span className="mt-2 block font-montserrat text-sm leading-relaxed text-[rgb(var(--color-off-white-rgb)/0.55)]">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 flex-row">
            <a
            href="#"
            className="text-center inline-flex items-center gap-3 px-8 py-4 border border-(--color-champagne-gold) text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold) hover:text-[#1A1A1A] transition-all duration-300"
            >
            Dowiedz się więcej
            <ExternalLink size={18} />
          </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default JoinUs;