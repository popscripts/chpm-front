import { Award, Globe, Medal } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";
import AlternatingFeatureList, {
  type AlternatingFeatureItem,
} from "../ui/AlternatingFeatureList";
import SectionHeader from "../ui/SectionHeader";

const achievements: AlternatingFeatureItem[] = [
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
    <SectionWrapper id="osiagniecia" background="tealRadial">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-reveal fade-up">
          <SectionHeader
            eyebrow="Nasze osiągnięcia"
            title="Największe osiągnięcia"
          />
        </div>

        <AlternatingFeatureList items={achievements} />
      </div>
    </SectionWrapper>
  );
}

export default Achievements;
