import { MapPin, Music, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../layout/SectionWrapper";
import ListCard from "../ui/ListCard";
import SectionHeader from "../ui/SectionHeader";

async function WhatIsSpecial() {
  const t = await getTranslations("aboutPage.whatIsSpecial");

  return (
    <SectionWrapper id="co-nas-wyroznia" background="dark">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-reveal fade-up">
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
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
              title={t("touring.title")}
              description={t("touring.description")}
              items={[
                t("touring.items.japan"),
                t("touring.items.taiwan"),
                t("touring.items.canada"),
                t("touring.items.ecuador"),
                t("touring.items.italy"),
                t("touring.items.france"),
                t("touring.items.spain"),
                t("touring.items.turkey"),
                t("touring.items.macedonia"),
                t("touring.items.lithuania"),
                t("touring.items.malta"),
                t("touring.items.ireland"),
                t("touring.items.russia"),
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
              title={t("collaboration.title")}
              description={t("collaboration.description")}
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
              title={t("premieres.title")}
              description={t("premieres.description")}
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
    </SectionWrapper>
  );
}

export default WhatIsSpecial;
