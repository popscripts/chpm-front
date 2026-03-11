import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

type ConductorAwardItem = {
  title: string;
  description?: string;
  date: string;
};

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
      title: "Akademia Sztuki w Szczecinie - Nagroda Rektorska",
      description:
        "Za wybitne osiągnięcia artystyczne w dyscyplinie sztuk muzycznych.",
      date: "październik 2022",
    },
    {
      title: "Nagroda " +
        "\"Pro Arte\" Marszałka Województwa Zachodniopomorskiego",
      description:
        "Za wybitne osiągnięcia w dziedzinie twórczości artystycznej, upowszechniania i ochrony kultury.",
      date: "październik 2022",
    },
    {
      title: "Odznaczenie Medalem Honorowym Akademii Morskiej w Szczecinie",
      date: "czerwiec 2022",
    },
    {
      title: "World Choir Festival - Hong Kong (Chiny)",
      description: "Dyplom dla jednego z 10 najlepszych dyrygentów festiwalu.",
      date: "czerwiec 2021",
    },
    {
      title: "Magnolie Biznesu (III edycja)",
      description: "Nagroda w kategorii \"Z miłości do Szczecina\".",
      date: "wrzesień 2021",
    },
    {
      title: "Brązowy Medal " +
        "\"Zasłużony Kulturze Gloria Artis\"",
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
      title: "Odznaka Honorowa \"Zasłużony dla Kultury Polskiej\"",
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
      date: "2010-2023",
    },
  ],
};

function Awards() {
  return (
    <SectionWrapper id="nagrody-i-wyroznienia" background="tealLinear">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 animate-reveal fade-up">
          <SectionHeader
            eyebrow={conductorAwards.eyebrow}
            title={conductorAwards.title}
            description={conductorAwards.intro}
            highlightWordsFromEnd={0}
            className="mx-auto max-w-2xl"
          />
        </div>

        <div className="divide-y divide-(--color-off-white)/12 border-y border-(--color-off-white)/12">
          {conductorAwards.items.map((award, index) => (
            <article
              key={`${award.title}-${award.date}`}
              className="animate-reveal fade-up py-4"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="grid gap-2 md:grid-cols-[170px_1fr] md:items-start md:gap-4">
                <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-(--color-champagne-gold) md:pt-1">
                  {award.date}
                </span>
                <div>
                  <h3 className="mb-2 font-playfair text-2xl text-(--color-off-white)">
                    {award.title}
                  </h3>
                  {award.description ? (
                    <p className="font-montserrat text-sm leading-relaxed text-(--color-off-white)/70">
                      {award.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Awards;