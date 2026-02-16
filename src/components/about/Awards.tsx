import type { FestivalItem } from "@/data/festivals";
import { createPageUrl } from "@/utils/helpers";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AwardsList from "./AwardsList";
import SectionHeader from "./SectionHeader";

type AwardsProps = {
  festivals?: FestivalItem[];
};

function Awards({ festivals = [] }: AwardsProps) {
  const hasFestivals = festivals.length > 0;

  if (!hasFestivals) {
    return null;
  }

  return (
    <section
      id="nagrody"
      className="scroll-mt-32 py-16 px-4 bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal)"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 animate-reveal fade-up">
          <SectionHeader
            eyebrow="Międzynarodowe sukcesy"
            title={
              <>
                Nasze{" "}
                <span className="text-(--color-champagne-gold)">nagrody</span>
              </>
            }
            description={
              <>
                Tylko w ostatnich 10 latach zdobyliśmy ponad{" "}
                <strong className="text-(--color-champagne-gold)">
                  85 głównych nagród
                </strong>{" "}
                festiwalowych, w tym 14 Grand Prix, 50 Złotych Medali oraz
                liczne nagrody uznaniowe
              </>
            }
          />
        </div>

        {hasFestivals ? <AwardsList festivals={festivals} /> : null}
        <div className="text-center mt-8">
          <Link
            href={createPageUrl("nagrody")}
            className="inline-flex items-center gap-3 px-8 py-4 bg-(--color-champagne-gold)/10 border border-(--color-champagne-gold) text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold) hover:text-[#1A1A1A] transition-all duration-300"
          >
            Zobacz wszystkie nagrody
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Awards;
