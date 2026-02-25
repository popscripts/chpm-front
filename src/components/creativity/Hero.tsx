import Image from 'next/image';

function Hero() {
    return (
      <section className="relative h-[50vh] overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal)">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80"
            alt="Twórczość"
            className="w-full h-full object-cover opacity-30"
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-(--color-deep-teal)/80 to-(--color-soft-charcoal)" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div
            className="text-center animate-reveal fade-up"
          >
            <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
              Twórczość
            </h1>
            <p className="font-montserrat text-lg text-(--color-off-white)/70">
              Nasza muzyka dostępna na wszystkich platformach
            </p>
          </div>
        </div>
      </section> 
    );
}

export default Hero;