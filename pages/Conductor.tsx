"use client";

import { motion } from 'framer-motion';
import { Award, Globe, GraduationCap, Music } from 'lucide-react';

export default function Conductor() {
  return (
    <div className="bg-(--color-soft-charcoal)">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal)">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80"
            alt="Anna Kowalska"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-(--color-deep-teal)/60 via-(--color-deep-teal)/80 to-(--color-soft-charcoal)" />
        </div>
        
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
                  Dyrygent
                </span>
                <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
                  Anna <span className="text-(--color-champagne-gold)">Kowalska</span>
                </h1>
                <p className="text-(--color-off-white)/70 font-montserrat text-lg leading-relaxed">
                  Artystyczna wizjonerka i charyzmatyczna liderka, która od 15 lat 
                  prowadzi Chór Harmonia ku najwyższym artystycznym osiągnięciom.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Anna Kowalska"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-(--color-champagne-gold)/30 -z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-12 text-center">
              Biografia
            </h2>
            
            <div className="space-y-6 text-(--color-off-white)/70 font-montserrat leading-relaxed text-lg">
              <p>
                Anna Kowalska jest absolwentką Akademii Muzycznej im. Fryderyka Chopina w Warszawie, 
                gdzie studiowała dyrygenturę chóralną pod kierunkiem prof. Jana Łukaszewskiego. 
                Swoją edukację kontynuowała w Hochschule für Musik w Wiedniu, gdzie doskonaliła 
                warsztat pod okiem wybitnych europejskich pedagogów.
              </p>
              
              <p>
                Swoją karierę dyrygencką rozpoczęła jako asystentka w Filharmonii Narodowej, 
                gdzie miała okazję współpracować z najwybitniejszymi polskimi i zagranicznymi 
                dyrygentami. To doświadczenie ukształtowało jej unikalne podejście do interpretacji 
                muzyki chóralnej - łączące precyzję techniczną z głęboką emocjonalnością.
              </p>
              
              <p className="bg-(--color-deep-teal)/30 border-l-4 border-(--color-champagne-gold) pl-6 py-4 italic">
                &quot;Dyrygentura to nie tylko machnięcie ręką. To umiejętność słuchania dziesiątek 
                głosów jednocześnie i przekształcania ich w jedną, spójną opowieść muzyczną. 
                Każdy koncert jest dla mnie podróżą, którą odbywam razem z moimi śpiewakami 
                i publicznością.&quot;
              </p>
              
              <p>
                Pod jej batutą Chór Harmonia zdobył najważniejsze nagrody na międzynarodowych 
                festiwalach w Pradze, Budapeszcie, Rzymie i Tallinie. Jej interpretacje muzyki 
                sakralnej zostały docenione przez krytykę muzyczną jako &quot;głęboko duchowe 
                i technicznie perfekcyjne&quot;.
              </p>
              
              <p>
                Poza pracą z chórem, Anna Kowalska prowadzi warsztaty dyrygenckie dla młodych 
                adeptów sztuki chóralnej oraz aktywnie działa na rzecz popularyzacji muzyki 
                chóralnej w Polsce. Jest również jurorką w prestiżowych konkursach chóralnych.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6 bg-gradient-to-b from-(--color-soft-charcoal) via-(--color-deep-teal)/20 to-(--color-soft-charcoal) shadow-[0_10px_60px_-15px_rgba(0,56,77,0.4)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white)">
              Osiągnięcia
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Wykształcenie",
                items: [
                  "Akademia Muzyczna im. F. Chopina w Warszawie (dyrygentura chóralna)",
                  "Hochschule für Musik w Wiedniu (studia podyplomowe)",
                  "Liczne kursy mistrzowskie w całej Europie"
                ]
              },
              {
                icon: Award,
                title: "Nagrody",
                items: [
                  "Nagroda Ministra Kultury za osiągnięcia w muzyce chóralnej (2023)",
                  "Złoty Krzyż Zasługi za promocję kultury polskiej (2021)",
                  "Wyróżnienie na Międzynarodowym Konkursie Dyrygentów w Paryżu (2019)"
                ]
              },
              {
                icon: Music,
                title: "Współpraca",
                items: [
                  "Filharmonia Narodowa w Warszawie",
                  "Orkiestra Kameralna Polskiego Radia",
                  "Teatr Wielki - Opera Narodowa"
                ]
              },
              {
                icon: Globe,
                title: "Doświadczenie międzynarodowe",
                items: [
                  "Dyrygowanie koncertami w 15 krajach europejskich",
                  "Współpraca z renomowanymi festiwalami chóralnymi",
                  "Prowadzenie warsztatów w całej Europie"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-(--color-off-white)/10 backdrop-blur-sm bg-(--color-deep-teal)/10 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-(--color-champagne-gold)/10 flex items-center justify-center">
                    <section.icon size={28} className="text-(--color-champagne-gold)" />
                  </div>
                  <h3 className="font-playfair text-2xl text-(--color-off-white)">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-(--color-off-white)/70 font-montserrat text-sm leading-relaxed flex items-start gap-3">
                      <span className="text-(--color-champagne-gold) mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-12">
              Filozofia <span className="text-(--color-champagne-gold)">artystyczna</span>
            </h2>
            
            <blockquote className="text-2xl font-playfair text-(--color-off-white)/80 italic leading-relaxed mb-8">
              &quot;Muzyka chóralna to sztuka wspólnego oddychania. Kiedy dziesiątki głosów 
              stają się jednym, dzieje się magia, której nie da się opisać słowami. 
              To moment, w którym muzyka przestaje być dźwiękiem, a staje się czystą emocją.&quot;
            </blockquote>
            
            <p className="text-(--color-off-white)/60 font-montserrat">— Anna Kowalska</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}