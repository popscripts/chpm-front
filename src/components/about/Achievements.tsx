import { Award, Globe, Medal } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const achievements = [
  {
    title: "Expo Osaka",
    icon: Globe,
    image: "/assets/images/chór_osaka.jpg",
    content: (
      <>
        <span className="block mb-3">
          Chór Politechniki Morskiej reprezentował Polskę podczas{" "}
          <strong className="text-(--color-off-white)">
            Expo 2025 Osaka Kansai Japan
          </strong>
          , jednego z najważniejszych miejsc spotkań kultur, idei i ludzi z
          całego świata.
        </span>
        <span className="block">
          Zespół został zaproszony przez Pawilon Polski, a przygotowania do
          występu trwały ponad rok. Koncerty przyciągnęły tak wielu słuchaczy,
          że zagrano dodatkowy, nadprogramowy występ. To wyróżnienie podkreśla
          międzynarodową rangę chóru i jego rolę w promowaniu polskiej kultury.
        </span>
      </>
    ),
  },
  {
    title: "Nominacja do Fryderyków",
    icon: Award,
    image: "/assets/images/Fryderyk_grafika-1.png",
    content: (
      <>
        <span className="block mb-3">
          W roku 2023, wydana w listopadzie roku poprzedniego płyta pn.{" "}
          <strong className="text-(--color-off-white)">
            „The Sound of the Sea”
          </strong>
          , zawierająca dzieła o tematyce marynistycznej, skomponowane
          specjalnie dla Chóru Politechniki Morskiej w Szczecinie przez
          wybitnych polskich kompozytorów muzyki współczesnej, otrzymała
          nominację do nagrody Fryderyk w kategorii{" "}
          <strong className="text-(--color-off-white)">
            Album Roku – Muzyka Chóralna
          </strong>
          .
        </span>
        <span className="block">
          To wyróżnienie potwierdza zarówno rangę projektu, jak i najwyższy
          poziom artystyczny zespołu.
        </span>
      </>
    ),
  },
  {
    title: "Ambasador Szczecina 2019",
    icon: Medal,
    image: "/assets/images/Ambasador-Szczecina-blog1.jpg",
    content: (
      <>
        <span className="block mb-3">
          Cztery lata temu Chór Akademii Morskiej otrzymał honorowy tytuł{" "}
          <strong className="text-(--color-off-white)">
            Ambasadora Szczecina 2019
          </strong>
          . O przyznaniu honorowej nagrody dla osób „których osiągnięcia
          przyczyniają się do budowania pozytywnego wizerunku Szczecina w kraju
          i za granicą” decyduje kapituła złożona z byłych prezydentów i
          obecnego prezydenta Szczecina oraz redaktorów naczelnych części
          szczecińskich mediów.
        </span>
        <span className="block">
          To oficjalne potwierdzenie roli zespołu jako kulturalnej wizytówki
          miasta.
        </span>
      </>
    ),
  },
];

function Achievements() {
  return (
    <section
      id="osiagniecia"
      className="scroll-mt-32 py-24 px-6 bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal)"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-reveal fade-up">
          <SectionHeader
            eyebrow="Nasze osiągnięcia"
            title={
              <>
                Największe{" "}
                <span className="text-(--color-champagne-gold)">
                  osiągnięcia
                </span>
              </>
            }
          />
        </div>

        <div className="space-y-12 md:space-y-20">
          {achievements.map((achievement, index) => {
            const isReversed = index === 1;
            return (
              <div key={achievement.title}>
                <article
                  className={`grid gap-8 md:grid-cols-[2fr_3fr] items-start text-left animate-reveal fade-up ${
                    isReversed ? "md:grid-cols-[3fr_2fr]" : ""
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div
                    className={`relative aspect-4/3 overflow-hidden bg-(--color-deep-teal)/20 mb-5 ${
                      isReversed ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={isReversed ? "md:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-(--color-champagne-gold)/15 text-(--color-champagne-gold)">
                        <achievement.icon size={20} />
                      </div>
                      <h3 className="font-playfair text-3xl text-(--color-off-white)">
                        {achievement.title}
                      </h3>
                    </div>
                    <p className="text-(--color-off-white)/70 font-montserrat leading-relaxed">
                      {achievement.content}
                    </p>
                  </div>
                </article>
                {index < achievements.length - 1 && (
                  <div className="mt-12 md:mt-16">
                    <div className="relative h-px w-full bg-linear-to-r from-transparent via-(--color-champagne-gold)/50 to-transparent" />
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-(--color-champagne-gold) shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
