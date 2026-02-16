import { motion } from "framer-motion";
import { Award } from "lucide-react";



function Achievements() {
  return ( <section id="osiagniecia" className="scroll-mt-32 py-24 px-6 bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal)">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <span className="text-(--color-champagne-gold) tracking-[0.2em] uppercase text-sm font-medium">
                nasze osiągnięcia
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-8">
              Największe <span className="text-(--color-champagne-gold)">osiągnięcia</span>
            </h2>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-[#00384d]/10 border border-(--color-off-white)/10 shadow-lg"
            >
              <Award size={32} className="text-[#D4AF37] mb-4" />
              <h3 className="font-playfair text-2xl text-(--color-off-white) mb-4">Ambasador Szczecina</h3>
              <p className="text-(--color-off-white)/70 font-montserrat leading-relaxed">
                W 2019 roku zespół otrzymał honorowy tytuł Ambasadora Szczecina, 
                przyznawany osobom &quot;których osiągnięcia przyczyniają się do budowania 
                pozytywnego wizerunku Szczecina w kraju i za granicą&quot;.
              </p>
            </motion.div>
        </div>
      </section> );
}

export default Achievements;