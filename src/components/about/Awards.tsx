import { createPageUrl } from "@/utils/helpers";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import Link from "next/link";
import GlassCard from "../ui/GlassCard";

const awards = [
  { year: 2024, title: "Grand Prix", competition: "Międzynarodowy Festiwal Muzyki Chóralnej w Pradze", description: "Najwyższe wyróżnienie wśród 45 zespołów z całego świata" },
  { year: 2023, title: "Złoty Medal", competition: "Festiwal Sacrum Profanum", description: "Za wybitne wykonanie muzyki współczesnej" },
  { year: 2022, title: "Nagroda Publiczności", competition: "Warszawskie Spotkania Chóralne", description: "Uznanie polskiej publiczności" },
  { year: 2021, title: "I Miejsce", competition: "Konkurs Muzyki Polskiej im. Karłowicza", description: "Kategoria chórów kameralnych" },
  { year: 2019, title: "Srebrna Lira", competition: "Europejski Konkurs Chóralny", description: "W kategorii muzyki sakralnej" },
  { year: 2018, title: "Grand Prix", competition: "Festiwal w Budapeszcie", description: "Za wybitną interpretację" }
];

function Awards() {
    return ( 
      <section id="nagrody" className="scroll-mt-32 py-16 px-4 bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal)">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <span className="text-(--color-champagne-gold) tracking-[0.2em] uppercase text-sm">
                międzynarodowe sukcesy
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-8">
              Nasze <span className="text-(--color-champagne-gold)">nagrody</span>
            </h2>
            <p className="text-(--color-off-white)/60 font-montserrat">
              Tylko w ostatnich 10 latach zdobyliśmy ponad <strong className="text-[#D4AF37]">85 głównych nagród</strong> festiwalowych, 
              w tym 14 Grand Prix, 50 Złotych Medali oraz liczne nagrody uznaniowe
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-(--color-champagne-gold)/30" />

            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-3 h-3 rounded-full bg-(--color-champagne-gold) transform -translate-x-1/2 z-10 shadow-[0_0_16px_rgba(212,175,55,0.5)]" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <GlassCard className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-(--color-champagne-gold)/20 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-(--color-champagne-gold)" />
                      </div>
                      <div>
                        <span className="text-(--color-champagne-gold) font-semibold text-base">{award.year}</span>
                        <h3 className="font-playfair text-lg text-(--color-off-white) font-semibold mt-1">
                          {award.title}
                        </h3>
                        <p className="text-(--color-off-white)/60 text-sm mt-1">
                          {award.competition}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
           <div className="text-center">
            <Link
              href={createPageUrl('nagrody')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
            >
              Zobacz wszystkie nagrody
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section> );
}

export default Awards;