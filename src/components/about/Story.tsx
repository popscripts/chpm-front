import Image from "next/image";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

async function Story() {
  const t = await getTranslations("aboutPage.story");

  return (
    <SectionWrapper id="kim-jestesmy" background="tealRadial">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-reveal fade-left">
            <SectionHeader
              align="left"
              eyebrow={t("eyebrow")}
              title={t("title")}
              highlightWordsFromEnd={0}
            />
            <div className="space-y-4 text-(--color-off-white)/70 font-montserrat leading-relaxed">
              <p>
                {t.rich("paragraph1Rich", {
                  highlight: (chunks) => (
                    <strong className="text-(--color-off-white)">{chunks}</strong>
                  ),
                })}
              </p>
              <p>
                {t("paragraph2")}
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-2 gap-4 animate-reveal fade-right"
            style={{ transitionDelay: "120ms" }}
          >
            <Image
              src="assets/images/about_hero1.jpg"
              alt={t("image1Alt")}
              width={600}
              height={800}
              sizes="(min-width: 768px) 280px, 45vw"
              className="aspect-3/4 object-cover grayscale-25 hover:grayscale-0 transition-all duration-700"
              unoptimized
            />
            <Image
              src="assets/images/about_hero2.jpg"
              alt={t("image2Alt")}
              width={600}
              height={800}
              sizes="(min-width: 768px) 280px, 45vw"
              className="aspect-3/4 object-cover grayscale-25 hover:grayscale-0 transition-all duration-700 mt-12"
              unoptimized
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Story;
