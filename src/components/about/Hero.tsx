import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-[60vh] overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal) shadow-[0_10px_40px_0px_rgb(var(--color-soft-charcoal-rgb))]">
      <div className="absolute inset-0">
        <Image
          src="assets/images/chor_ryba.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal) " />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl animate-reveal fade-up">
          <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
            O <span className="text-(--color-champagne-gold)">nas</span>
          </h1>
          <p className="font-montserrat text-lg md:text-xl text-(--color-off-white)/80">
            Pasja, perfekcja i tradycja muzyki chóralnej
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
