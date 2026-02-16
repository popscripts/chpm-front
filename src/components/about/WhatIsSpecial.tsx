import { motion } from "framer-motion";
import { MapPin, Music, Users } from "lucide-react";
import ListCard from "../ui/ListCard";

function WhatIsSpecial() {
  return ( <section id="co-nas-wyroznia" className="scroll-mt-32 py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <span className="text-(--color-champagne-gold) tracking-[0.2em] uppercase text-sm">
                Nasze wyróżnienia
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-8">
              Co nas <span className="text-(--color-champagne-gold)">wyróżnia</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            <ListCard
              icon={<MapPin size={32} className="text-[#D4AF37] mb-4" />}
              title="Tournée międzynarodowe"
              description="Zespół odwiedził już kilkadziesiąt krajów świata, zdobywając uznanie międzynarodowej publiczności"
              items={[
                "Japonia",
                "Tajwan",
                "Kanada",
                "Ekwador",
                "Włochy",
                "Francja",
                "Hiszpania",
                "Turcja",
                "Macedonia",
                "Litwa",
                "Malta",
                "Irlandia",
                "Rosja",
              ]}
            />

            <ListCard
              icon={<Users size={32} className="text-[#D4AF37]" />}
              title="Współpraca z gwiazdami"
              description="Grupa zapraszana jest do współpracy z wybitnymi artystami polskiej i zagranicznej sceny muzycznej"
              items={[
                "Andrea Bocelli",
                "Krzysztof Penderecki",
                "Krzesimir Dębski",
                "Henri Seroka",
                "Michael McGlynn",
                "Włodek Pawlik",
                "Zbigniew Wodecki",
                "Andrzej Smolik",
                "Grzegorz Turnau",
                "Andrzej Piaseczny",
                "Justyna Steczkowska",
                "Kayah",
                "Jan Kanty Pawluśkiewicz"
              ]}
            />

            <ListCard
              icon={<Music size={32} className="text-[#D4AF37]" />}
              title="Prapremiery"
              description="Chór dokonał kilkunastu prapremierowych wykonań dzieł uznanych kompozytorów polskich, w tym:"
              items={[
                "Marek Jasiński",
                "Janusz Stalmierski",
                "Marek Raczyński",
                "Bartosz Kowalski",
                "Marek Czerniewicz",
                "Jacek Sykulski",
                "Szymon Godziemba-Trytek",
                "Piotr Broda",
              ]}
            />
            </div>
            </div>
      </section>  );
}

export default WhatIsSpecial;