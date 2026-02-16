import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Project() {
  return ( <section id="wspolne-brzmienia" className="scroll-mt-32 py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              Nasz autorski projekt
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-6">
              Wspólne <span className="text-[#D4AF37]">Brzmienia</span>
            </h2>
            <p className="text-(--color-off-white)/70 font-montserrat leading-relaxed mb-8">
              Od kilku lat jesteśmy autorami i pomysłodawcami projektu <strong>Wspólne brzmienia</strong>, 
              który rokrocznie przyciąga rzesze fanów. Łączymy klasyczne brzmienia chóralne z rozmaitymi 
              nurtami i stylami muzycznymi - od rocka (ØRGANEK), przez jazz (Kuba Badach, Dorota Miśkiewicz, 
              Komeda), po muzykę etniczną (Kayah i Kroke) i eksperymenty z elektroniką (Fisz Emade Tworzywo, 
              Mikromusic, Smolik).
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
            >
              Dowiedz się więcej
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </section> );
}

export default Project;