import { motion } from "framer-motion";
import Image from "next/image";

function Hero() {
    return (
      <section className="relative h-[60vh] overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal) shadow-[0_10px_40px_0px_rgb(var(--color-soft-charcoal-rgb))]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
            alt="Chór Harmonia"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal) " />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
              O <span className="text-(--color-champagne-gold)">nas</span>
            </h1>
            <p className="font-montserrat text-lg md:text-xl text-(--color-off-white)/80">
              Pasja, perfekcja i tradycja muzyki chóralnej
            </p>
          </motion.div>
        </div>
      </section> );
}

export default Hero;