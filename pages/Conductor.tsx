import AlternatingFeatureList, {
  type AlternatingFeatureItem,
} from "@/components/ui/AlternatingFeatureList";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

type ConductorAwardItem = {
  title: string;
  description?: string;
  date: string;
};

const biographyHighlights: AlternatingFeatureItem[] = [
  {
    title: "Wykształcenie i stopnie",
    image: "/assets/images/Sylwia_Fabiańczyk-Makuch.jpg",
    imageAlt: "Prof. Sylwia Fabiańczyk-Makuch",
    content: (
      <>
        Akademia Muzyczna im. I. J. Paderewskiego w Poznaniu (filia w
        Szczecinie),
        <strong className="text-(--color-off-white)">
          {" "}dyplom z wyróżnieniem
        </strong>{" "}
        w klasie prof. Jana Szyrockiego. Podyplomowe
        <strong className="text-(--color-off-white)">
          {" "}Studium Chórmistrzowskie
        </strong>{" "}
        w Akademii Muzycznej im. F. Nowowiejskiego w Bydgoszczy.
        <strong className="text-(--color-off-white)">
          {" "}Doktor sztuk muzycznych
        </strong>{" "}
        (dyrygentura) — Uniwersytet Muzyczny Fryderyka Chopina w Warszawie,
        2011.
        <strong className="text-(--color-off-white)">
          {" "}Doktor habilitowany
        </strong>{" "}
        — Akademia Muzyczna w Gdańsku, 2017.
      </>
    ),
  },
  {
    title: "Działalność artystyczna",
    image: "/assets/images/about_hero1.jpg",
    imageAlt: "Występ chóru",
    content: (
      <>
        <strong className="text-(--color-off-white)">Jurorka</strong>
        {" "}festiwali i przeglądów chóralnych. Od 2001 roku prowadzi
        <strong className="text-(--color-off-white)">
          {" "}warsztaty szkoleniowe z emisji głosu
        </strong>
        . W latach 2008-2014
        dyrygent chóru działającego w Zespole Szkół Muzycznych II st. w
        Szczecinie. Założycielka zespołu wokalnego
        <strong className="text-(--color-off-white)">
          {" "}Pomerania Singers
        </strong>{" "}
        (2015), aktywnego w najważniejszych wydarzeniach artystycznych miasta i
        regionu.
      </>
    ),
  },
  {
    title: "Działalność dydaktyczna i organizacyjna",
    image: "/assets/images/about_hero2.jpg",
    imageAlt: "Działalność dydaktyczna i organizacyjna",
    content: (
      <>
        Z zespołem Pomerania Singers wydała płytę z dziełami Romualda
        Twardowskiego (Tryptyk morski) oraz Mszą Stella Maris op.49 nr 4
        Feliksa Nowowiejskiego. Od 2017 roku związana z Akademią Sztuki w
        Szczecinie, gdzie prowadzi zajęcia z dyrygentury, czytania partytur i
        metodyki prowadzenia zespołów wokalnych.
        <strong className="text-(--color-off-white)">
          {" "}Dyrektor Centrum Kultury Akademickiej
        </strong>{" "}
        Politechniki Morskiej w Szczecinie.
        <strong className="text-(--color-off-white)">
          {" "}Dyrektor artystyczna PZChiO
        </strong>{" "}
        oddział Szczecin oraz autorskiego projektu Chóru Politechniki Morskiej
        <strong className="text-(--color-off-white)">
          {" "}„Wspólne brzmienia”
        </strong>
        .
      </>
    ),
  },
];

const conductorAwards: {
  eyebrow: string;
  title: string;
  intro: string;
  items: ConductorAwardItem[];
} = {
  eyebrow: "Dorobek artystyczny",
  title: "Nagrody i wyróżnienia",
  intro:
    "Najważniejsze wyróżnienia dyrygentki za działalność artystyczną, edukacyjną i społeczną.",
  items: [
    {
      title: "Krzyż Kawalerski Orderu Odrodzenia Polski",
      description:
        "Za wybitne zasługi dla rozwoju i popularyzowania polskiej chóralistyki, w szczególności muzyki marynistycznej oraz za działalność charytatywną.",
      date: "wrzesień 2023",
    },
    {
      title: "Akademia Sztuki w Szczecinie – Nagroda Rektorska",
      description:
        "Za wybitne osiągnięcia artystyczne w dyscyplinie sztuk muzycznych.",
      date: "październik 2022",
    },
    {
      title: "Nagroda „Pro Arte” Marszałka Województwa Zachodniopomorskiego",
      description:
        "Za wybitne osiągnięcia w dziedzinie twórczości artystycznej, upowszechniania i ochrony kultury.",
      date: "październik 2022",
    },
    {
      title: "Odznaczenie Medalem Honorowym Akademii Morskiej w Szczecinie",
      date: "czerwiec 2022",
    },
    {
      title: "World Choir Festival – Hong Kong (Chiny)",
      description: "Dyplom dla jednego z 10 najlepszych dyrygentów festiwalu.",
      date: "czerwiec 2021",
    },
    {
      title: "Magnolie Biznesu (III edycja)",
      description: "Nagroda w kategorii „Z miłości do Szczecina”.",
      date: "wrzesień 2021",
    },
    {
      title: "Brązowy Medal „Zasłużony Kulturze Gloria Artis”",
      description: "Nagroda Ministra Kultury i Dziedzictwa Narodowego.",
      date: "czerwiec 2019",
    },
    {
      title: "Srebrny Krzyż Zasługi",
      description: "Nagroda Prezydenta RP.",
      date: "czerwiec 2019",
    },
    {
      title: "Złota Odznaka Honorowa PZCHiO",
      date: "czerwiec 2019",
    },
    {
      title: "Krzyż Zasługi Archidiecezji Szczecińsko-Kamieńskiej",
      date: "czerwiec 2019",
    },
    {
      title:
        "Honorowy tytuł Ambasadora Szczecina dla Chóru Akademii Morskiej w Szczecinie",
      date: "2019",
    },
    {
      title: "Nominacja do Nagrody Artystycznej Miasta Szczecina",
      date: "2018",
    },
    {
      title: "Zachodniopomorski Nobel w dziedzinie nauk artystycznych",
      date: "2017",
    },
    {
      title: "Nagrody rektorskie Akademii Morskiej w Szczecinie",
      date: "2012, 2015",
    },
    {
      title: "Medal Komisji Edukacji Narodowej",
      description: "Za szczególne zasługi dla oświaty i wychowania.",
      date: "sierpień 2015",
    },
    {
      title: "Odznaka Honorowa „Zasłużony dla Kultury Polskiej”",
      description: "Nagroda Ministra Kultury i Dziedzictwa Narodowego.",
      date: "2013",
    },
    {
      title:
        "Dyplom Uznania Zasług dla Kultury i Promocji Województwa Zachodniopomorskiego",
      description: "Nagroda Marszałka Województwa Zachodniopomorskiego.",
      date: "wrzesień 2013",
    },
    {
      title: "Nagrody indywidualne dla najlepszego dyrygenta festiwalu",
      description:
        "Chełmno 2010, Głogów 2012, Praga 2014, Bratysława 2016, Legnica 2017, Lublin 2017, Barczewo 2022, Gorizia 2023.",
      date: "2010–2023",
    },
  ],
};

export default function Conductor() {
  return (
    <div className="bg-(--color-soft-charcoal)">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal)">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80"
            alt="Anna Kowalska"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-b from-(--color-deep-teal)/60 via-(--color-deep-teal)/80 to-(--color-soft-charcoal)" />
        </div>

        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-reveal fade-left">
                <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
                  Dyrygent
                </span>
                <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
                  prof. Sylwia{" "}
                  <span className="text-(--color-champagne-gold)">
                    Fabiańczyk-Makuch
                  </span>
                </h1>
                <p className="text-(--color-off-white)/70 font-montserrat text-lg leading-relaxed">
                  Prof. Akademii Sztuki w Szczecinie oraz dyrygent i założyciel
                  Chóru Politechniki Morskiej w Szczecinie, z którym od 20 lat
                  koncertuje oraz zdobywa prestiżowe nagrody w kraju i za
                  granicą.
                </p>
              </div>

              <div
                className="relative animate-reveal fade-right"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="relative aspect-3/4 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Anna Kowalska"
                    fill
                    sizes="(min-width: 768px) 340px, 70vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-(--color-champagne-gold)/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-6xl mx-auto">
          <div className="animate-reveal fade-up">
            <SectionHeader
              title="Biografia"
              highlightWordsFromEnd={0}
              description="Dyrygentka, pedagożka i animatorka życia muzycznego Pomorza
                Zachodniego, łącząca działalność koncertową, dydaktyczną i
                organizacyjną."
            />

            <div className="mt-8">
              <AlternatingFeatureList items={biographyHighlights} />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-reveal fade-up mb-16">
            <SectionHeader
              eyebrow={conductorAwards.eyebrow}
              title={conductorAwards.title}
              description={conductorAwards.intro}
              highlightWordsFromEnd={0}
              className="max-w-2xl mx-auto"
            />
          </div>

          <div className="divide-y divide-(--color-off-white)/12 border-y border-(--color-off-white)/12">
            {conductorAwards.items.map((award, index) => (
              <article
                key={`${award.title}-${award.date}`}
                className="py-4 animate-reveal fade-up"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="grid gap-2 md:gap-4 md:grid-cols-[170px_1fr] md:items-start">
                  <span className="text-(--color-champagne-gold) font-montserrat text-xs uppercase tracking-[0.2em] md:pt-1">
                    {award.date}
                  </span>
                  <div>
                    <h3 className="font-playfair text-2xl text-(--color-off-white) mb-2">
                      {award.title}
                    </h3>
                    {award.description ? (
                      <p className="text-(--color-off-white)/70 font-montserrat text-sm leading-relaxed">
                        {award.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
