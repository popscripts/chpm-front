import AlternatingFeatureList, {
  type AlternatingFeatureItem,
} from "@/components/ui/AlternatingFeatureList";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const biographyHighlights: AlternatingFeatureItem[] = [
  {
    title: "Wykształcenie i stopnie",
    image: "/assets/images/Sylwia1.png",
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
        (dyrygentura) - Uniwersytet Muzyczny Fryderyka Chopina w Warszawie,
        2011.
        <strong className="text-(--color-off-white)">
          {" "}Doktor habilitowany
        </strong>{" "}
        - Akademia Muzyczna w Gdańsku, 2017.
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
        . W latach 2008-2014 dyrygent chóru działającego w Zespole Szkół
        Muzycznych II st. w Szczecinie. Założycielka zespołu wokalnego
        <strong className="text-(--color-off-white)"> Pomerania Singers</strong>{" "}
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
          {" "}&quot;Wspólne brzmienia&quot;
        </strong>
        .
      </>
    ),
  },
];

function Biography() {
  return (
    <SectionWrapper id="biografia" background="dark">
      <div className="mx-auto max-w-6xl">
        <div className="animate-reveal fade-up">
          <SectionHeader
            title="Biografia"
            highlightWordsFromEnd={0}
            description="Dyrygentka, pedagożka i animatorka życia muzycznego Pomorza Zachodniego, łącząca działalność koncertową, dydaktyczną i organizacyjną."
          />

          <div className="mt-8">
            <AlternatingFeatureList items={biographyHighlights} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Biography;