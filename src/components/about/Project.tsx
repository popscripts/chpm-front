import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

function Project() {
  return (
    <section
      id="wspolne-brzmienia"
      className="scroll-mt-32 py-24 px-6 bg-(--color-soft-charcoal)"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-reveal fade-up">
          <SectionHeader
            eyebrow="Nasz autorski projekt"
            title={
              <>
                Wspólne{" "}
                <span className="text-(--color-champagne-gold)">Brzmienia</span>
              </>
            }
          />
          <p className="text-(--color-off-white)/70 font-montserrat leading-relaxed mb-8">
            Od kilku lat jesteśmy autorami i pomysłodawcami projektu{" "}
            <strong>Wspólne brzmienia</strong>, który rokrocznie przyciąga
            rzesze fanów. Łączymy klasyczne brzmienia chóralne z rozmaitymi
            nurtami i stylami muzycznymi - od rocka (ØRGANEK), przez jazz (Kuba
            Badach, Dorota Miśkiewicz, Komeda), po muzykę etniczną (Kayah i
            Kroke) i eksperymenty z elektroniką (Fisz Emade Tworzywo,
            Mikromusic, Smolik).
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 border border-(--color-champagne-gold) text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold) hover:text-[#1A1A1A] transition-all duration-300"
          >
            Dowiedz się więcej
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
