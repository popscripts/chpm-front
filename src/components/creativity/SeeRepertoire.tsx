import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../about/SectionHeader";

function SeeRepertoire() {
    return ( 
    <section className="scroll-mt-32 py-24 px-6 bg-linear-to-b from-(--color-soft-charcoal) to-(--color-deep-teal-medium)" id="repertuar">
        <div className="max-w-4xl mx-auto text-center">
         <SectionHeader title={"Pełen repertuar"} eyebrow="repertuar" description="lista wykonywanych przez nas utworów na przestrzeni lat"/>
         <Link href="/repertuar" className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-(--color-champagne-gold) text-(--color-soft-charcoal) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold)/90 transition-all duration-300">
              Zobacz pełen repertuar
              <ArrowRight size={18} className="ml-2" />
            </Link>
        </div>
      </section> );
}

export default SeeRepertoire;