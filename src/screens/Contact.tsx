import { Mail, MapPin, Phone, Users } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getTranslations } from "next-intl/server";

async function Contact() {
  const t = await getTranslations("contactPage");
  const managementBoard = [
    { role: t("board.roles.president"), members: ["Ewa Stojek"] },
    { role: t("board.roles.vicePresident"), members: ["Agnieszka Opałka"] },
    {
      role: t("board.roles.members"),
      members: ["Joanna Kloc", "Szymon Pałac", "Jakub Schalczewski"],
    },
  ];

  return (
    <div className="bg-(--color-soft-charcoal)">
      <SectionWrapper
        id="kontakt"
        background="tealLinear"
        className="relative overflow-hidden"
      >
        <div className="py-24">
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-12 animate-reveal fade-up">
              <SectionHeader
                eyebrow={t("eyebrow")}
                title={t("title")}
                highlightWordsFromEnd={0}
              />
            </div>

            <div className="mb-12 animate-reveal fade-up">
              <p className="font-montserrat text-sm uppercase tracking-[0.2em] text-(--color-off-white)/60">
                {t("conductorLabel")}
              </p>
              <p className="mt-3 font-playfair text-(--color-off-white) text-2xl">
                prof. Sylwia Fabiańczyk-Makuch
              </p>
            </div>

            <div className="grid lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <section
                  className="mb-12 animate-reveal fade-up"
                  style={{ transitionDelay: "80ms" }}
                >
                  <h2 className="mb-4 font-playfair text-3xl text-(--color-off-white)">
                    {t("contactTitle")}
                  </h2>

                  <div className="space-y-5 border-l border-(--color-off-white)/15 pl-5 font-montserrat text-(--color-off-white)/75">
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={20}
                        className="mt-0.5 shrink-0 text-(--color-champagne-gold)"
                      />
                      <p>
                        {t("address.line1")}
                        <br />
                        {t("address.line2")}
                        <br />
                        {t("address.line3")}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone
                        size={20}
                        className="text-(--color-champagne-gold)"
                      />
                      <a
                        href={`tel:${t("contactDetails.phoneHref")}`}
                        className="transition-colors hover:text-(--color-champagne-gold)"
                      >
                        {t("contactDetails.phoneDisplay")}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail
                        size={20}
                        className="text-(--color-champagne-gold)"
                      />
                      <a
                        href={`mailto:${t("contactDetails.email")}`}
                        className="transition-colors hover:text-(--color-champagne-gold)"
                      >
                        {t("contactDetails.email")}
                      </a>
                    </div>
                  </div>
                </section>

                <section
                  className="mb-12 animate-reveal fade-up"
                  style={{ transitionDelay: "160ms" }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Users
                      size={22}
                      className="text-(--color-champagne-gold)"
                    />
                    <h2 className="font-playfair text-3xl text-(--color-off-white)">
                      {t("board.title")}
                    </h2>
                  </div>

                  <div className="space-y-4 border-l border-(--color-off-white)/15 pl-5">
                    {managementBoard.map((item) => (
                      <div key={item.role} className="font-montserrat">
                        <p className="text-sm uppercase tracking-[0.2em] text-(--color-off-white)/55">
                          {item.role}
                        </p>
                        <p className="mt-1 text-(--color-off-white)/80">
                          {item.members.join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside
                className="animate-reveal fade-up lg:col-span-5"
                style={{ transitionDelay: "240ms" }}
              >
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <iframe
                      title={t("mapTitle")}
                      src="https://www.google.com/maps?q=Politechnika%20Morska%20w%20Szczecinie%20Wa%C5%82y%20Chrobrego%201-2%2C%2070-500%20Szczecin&output=embed"
                      className="h-80 w-full border-0 md:h-105"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full border border-(--color-champagne-gold)/30" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Contact;