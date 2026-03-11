import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

function SeeRepertoire() {
  return (
    <SectionWrapper
      id="repertuar"
      background="tealLinear"
    >
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          title={"Pełen repertuar"}
          eyebrow="repertuar"
          description="lista wykonywanych przez nas utworów na przestrzeni lat"
        />
        <Link
          href="/repertuar"
          className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-(--color-champagne-gold) text-(--color-soft-charcoal) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold)/90 transition-all duration-300"
        >
          Zobacz pełen repertuar
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </SectionWrapper>
  );
}

export default SeeRepertoire;
