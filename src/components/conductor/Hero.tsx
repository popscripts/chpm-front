import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal) md:h-screen">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/Sylwia_Fabiańczyk-Makuch.jpg"
          alt="Prof. Sylwia Fabiańczyk-Makuch"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-b from-(--color-deep-teal)/60 via-(--color-deep-teal)/80 to-(--color-soft-charcoal)" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center px-6 pt-24 md:h-full md:min-h-0 md:pt-0">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="animate-reveal fade-left">
              <span className="mb-4 block font-montserrat text-sm uppercase tracking-[0.3em] text-(--color-champagne-gold)">
                Dyrygent
              </span>
              <h1 className="mb-6 font-playfair text-5xl text-(--color-off-white) md:text-7xl">
                prof. Sylwia{" "}
                <span className="text-(--color-champagne-gold)">
                  Fabiańczyk-Makuch
                </span>
              </h1>
              <p className="font-montserrat text-lg leading-relaxed text-(--color-off-white)/70">
                Prof. Akademii Sztuki w Szczecinie oraz dyrygent i założyciel
                Chóru Politechniki Morskiej w Szczecinie, z którym od 20 lat
                koncertuje oraz zdobywa prestiżowe nagrody w kraju i za
                granicą.
              </p>
            </div>

            <div
              className="relative mx-auto w-full max-w-75 animate-reveal fade-right sm:max-w-100 md:ml-auto md:max-w-120"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src="/assets/images/Sylwia_Fabiańczyk-Makuch.jpg"
                  alt="Prof. Sylwia Fabiańczyk-Makuch"
                  fill
                  sizes="(min-width: 768px) 340px, 70vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full border border-(--color-champagne-gold)/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;