"use client";

import GlassCard from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { Award, Music, Trophy, Users } from 'lucide-react';

const awards = [
  { year: 2024, title: "Grand Prix", competition: "Międzynarodowy Festiwal Muzyki Chóralnej w Pradze", description: "Najwyższe wyróżnienie wśród 45 zespołów z całego świata" },
  { year: 2023, title: "Złoty Medal", competition: "Festiwal Sacrum Profanum", description: "Za wybitne wykonanie muzyki współczesnej" },
  { year: 2022, title: "Nagroda Publiczności", competition: "Warszawskie Spotkania Chóralne", description: "Uznanie polskiej publiczności" },
  { year: 2021, title: "I Miejsce", competition: "Konkurs Muzyki Polskiej im. Karłowicza", description: "Kategoria chórów kameralnych" },
  { year: 2019, title: "Srebrna Lira", competition: "Europejski Konkurs Chóralny", description: "W kategorii muzyki sakralnej" },
  { year: 2018, title: "Grand Prix", competition: "Festiwal w Budapeszcie", description: "Za wybitną interpretację" }
];

const stats = [
  { icon: Users, number: "45", label: "Członków zespołu" },
  { icon: Music, number: "500+", label: "Wykonanych koncertów" },
  { icon: Trophy, number: "25", label: "Zdobytych nagród" },
  { icon: Award, number: "30+", label: "Lat tradycji" }
];

export default function About() {

  return (
    <div className="bg-(--color-soft-charcoal)">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal) shadow-[0_10px_40px_0px_rgb(var(--color-soft-charcoal-rgb))]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
            alt="Chór Harmonia"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal) " />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
              O <span className="text-(--color-champagne-gold)">nas</span>
            </h1>
            <p className="font-montserrat text-lg md:text-xl text-(--color-off-white)/80">
              Pasja, perfekcja i tradycja muzyki chóralnej
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal)">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
                Nasza historia
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-6">
                Trzy dekady doskonałości
              </h2>
              <div className="space-y-4 text-(--color-off-white)/70 font-montserrat leading-relaxed">
                <p>
                  Chór Harmonia powstał w 1995 roku z inicjatywy grupy entuzjastów muzyki chóralnej. 
                  Od samego początku naszą misją było tworzenie przestrzeni, w której muzyka chóralna 
                  staje się niezapomnianym przeżyciem zarówno dla wykonawców, jak i słuchaczy.
                </p>
                <p>
                  Przez ponad 30 lat działalności zdobyliśmy uznanie na scenach całej Europy, 
                  występując w najbardziej prestiżowych salach koncertowych od Pragi po Londyn. 
                  Nasze wykonania charakteryzuje dbałość o każdy detal, perfekcyjna harmonia 
                  i głęboka interpretacja utworów.
                </p>
                <p>
                  Repertuar chóru obejmuje szeroki zakres - od polifonii renesansowej, 
                  przez wielkie dzieła romantyzmu, aż po współczesne kompozycje. Specjalizujemy 
                  się w muzyce sakralnej, ale równie chętnie sięgamy po utwory świeckie i pieśni ludowe.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80"
                alt="Chór podczas koncertu"
                className="aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80"
                alt="Próba chóru"
                className="aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 mt-12"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-(--color-champagne-gold)/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-(--color-champagne-gold)" />
                </div>
                <span className="block font-playfair text-4xl text-(--color-champagne-gold) mb-2">{stat.number}</span>
                <span className="text-(--color-off-white)/60 font-montserrat text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-16 px-4 bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal)">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <span className="text-(--color-champagne-gold) tracking-[0.2em] uppercase text-sm font-medium">
              Osiągnięcia
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) font-bold mt-4">
              Nasze <span className="text-(--color-champagne-gold)">Nagrody</span>
            </h2>
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
                      <div className="w-10 h-10 rounded-full bg-(--color-champagne-gold)/20 flex items-center justify-center flex-shrink-0">
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
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-6">
              Co nas <span className="text-(--color-champagne-gold)">wyróżnia</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Perfekcja brzmienia",
                description: "Każdy koncert to efekt setek godzin wspólnych prób, podczas których dopracowujemy każdy detal wykonania."
              },
              {
                title: "Różnorodny repertuar",
                description: "Od muzyki dawnej po współczesne kompozycje - wykonujemy utwory z różnych epok i stylów."
              },
              {
                title: "Międzynarodowe doświadczenie",
                description: "Występujemy na najważniejszych scenach Europy, zdobywając uznanie publiczności i jury konkursowych."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 border border-(--color-off-white)/10 hover:border-(--color-champagne-gold)/30 transition-colors"
              >
                <h3 className="font-playfair text-2xl text-(--color-off-white) mb-4">{item.title}</h3>
                <p className="text-(--color-off-white)/60 font-montserrat leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}