import Image from "next/image";
import SectionHeader from "./SectionHeader";

function Story() {
  return (
    <section
      id="kim-jestesmy"
      className="scroll-mt-32 py-24 px-6 bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal)"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-reveal fade-left">
            <SectionHeader
              align="left"
              eyebrow="Kim jesteśmy"
              title="Chór Politechniki Morskiej w Szczecinie"
            />
            <div className="space-y-4 text-(--color-off-white)/70 font-montserrat leading-relaxed">
              <p>
                Pod dyrekcją założycielki,{" "}
                <strong className="text-(--color-off-white)">
                  prof. Sylwii Fabiańczyk-Makuch
                </strong>
                , istnieje na scenie muzycznej już ponad 20 lat. Zespół szybko
                stał się wizytówką miasta i regionu, szerząc morską tradycję w
                kraju i poza jego granicami.
              </p>
              <p>
                Blisko stuosobowa grupa ma na swoim koncie setki koncertów,
                kilkanaście międzynarodowych tournée oraz kilkadziesiąt głównych
                nagród uzyskanych na prestiżowych festiwalach chóralnych w kraju
                i za granicą.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-2 gap-4 animate-reveal fade-right"
            style={{ transitionDelay: "120ms" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80"
              alt="Chór podczas koncertu"
              width={600}
              height={800}
              sizes="(min-width: 768px) 280px, 45vw"
              className="aspect-3/4 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              unoptimized
            />
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80"
              alt="Próba chóru"
              width={600}
              height={800}
              sizes="(min-width: 768px) 280px, 45vw"
              className="aspect-3/4 object-cover grayscale hover:grayscale-0 transition-all duration-700 mt-12"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
