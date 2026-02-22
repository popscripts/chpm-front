import Image from "next/image";

interface HeroProps {
  isAbsolute?: boolean;
}

function Hero({ isAbsolute = false }: HeroProps) {
  return (
    <section
      className={`top-0 h-[50vh] w-full overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal) ${isAbsolute ? "absolute" : "relative"}`}
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/images/event_hero.jpg"
          alt="Koncert"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-b from-(--color-deep-teal)/45 to-(--color-soft-charcoal)" />
      </div>
    </section>
  );
}

export default Hero;
