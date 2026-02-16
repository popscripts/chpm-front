import { MapPin, Music, Users } from "lucide-react";
import ListCard from "../ui/ListCard";
import SectionHeader from "./SectionHeader";

function WhatIsSpecial() {
  return (
    <section
      id="co-nas-wyroznia"
      className="scroll-mt-32 py-24 px-6 bg-(--color-soft-charcoal)"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-reveal fade-up">
          <SectionHeader
            eyebrow="Nasze wyróżnienia"
            title={
              <>
                Co nas{" "}
                <span className="text-(--color-champagne-gold)">wyróżnia</span>
              </>
            }
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          <div className="animate-reveal fade-up">
            <ListCard
              icon={
                <MapPin
                  size={32}
                  className="text-(--color-champagne-gold) mb-4"
                />
              }
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
          </div>

          <div
            className="animate-reveal fade-up"
            style={{ transitionDelay: "90ms" }}
          >
            <ListCard
              icon={
                <Users size={32} className="text-(--color-champagne-gold)" />
              }
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
                "Jan Kanty Pawluśkiewicz",
              ]}
            />
          </div>

          <div
            className="animate-reveal fade-up"
            style={{ transitionDelay: "180ms" }}
          >
            <ListCard
              icon={
                <Music size={32} className="text-(--color-champagne-gold)" />
              }
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
      </div>
    </section>
  );
}

export default WhatIsSpecial;
