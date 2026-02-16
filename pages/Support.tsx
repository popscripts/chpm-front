"use client";

import { placeholderPatrons } from "@/data/patrons";
import { motion } from "framer-motion";
import { Award, Crown, ExternalLink, Heart, Star } from "lucide-react";

const tierConfig = {
  oficer: {
    icon: Crown,
    color: "text-(--color-champagne-gold)",
    bg: "bg-(--color-champagne-gold)/10",
    border: "border-(--color-champagne-gold)/40",
    label: "Oficer",
  },
  mechanik: {
    icon: Award,
    color: "text-(--color-off-white)/80",
    bg: "bg-(--color-off-white)/8",
    border: "border-(--color-off-white)/25",
    label: "Mechanik",
  },
  bosman: {
    icon: Star,
    color: "text-(--color-off-white)",
    bg: "bg-(--color-deep-teal)/20",
    border: "border-(--color-deep-teal)/40",
    label: "Bosman",
  },
  marynarz: {
    icon: Heart,
    color: "text-(--color-off-white)/70",
    bg: "bg-(--color-deep-teal-medium)/20",
    border: "border-(--color-deep-teal-medium)/40",
    label: "Marynarz",
  },
  mat_podchorazy: {
    icon: Heart,
    color: "text-(--color-off-white)/60",
    bg: "bg-(--color-deep-teal-dark)/30",
    border: "border-(--color-deep-teal-dark)/50",
    label: "Mat Podchorąży",
  },
};

const tierOrder = [
  "oficer",
  "mechanik",
  "bosman",
  "marynarz",
  "mat_podchorazy",
];

export default function Support() {
  const patrons = placeholderPatrons;

  const groupedPatrons = {
    oficer: patrons.filter((p) => p.tier === "oficer"),
    mechanik: patrons.filter((p) => p.tier === "mechanik"),
    bosman: patrons.filter((p) => p.tier === "bosman"),
    marynarz: patrons.filter((p) => p.tier === "marynarz"),
    mat_podchorazy: patrons.filter((p) => p.tier === "mat_podchorazy"),
  };

  return (
    <div className="bg-(--color-soft-charcoal) min-h-screen">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden bg-linear-to-b from-(--color-deep-teal) to-(--color-soft-charcoal)">
        <div className="absolute inset-0"></div>

        {/* Decorative circles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-(--color-champagne-gold)/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-(--color-champagne-gold)/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-(--color-champagne-gold)/10 rounded-full" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <div className="w-24 h-24 bg-(--color-champagne-gold)/10 flex items-center justify-center mx-auto mb-8">
              <Heart size={48} className="text-(--color-champagne-gold)" />
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
              Wesprzyj{" "}
              <span className="text-(--color-champagne-gold)">Harmonię</span>
            </h1>

            <p className="font-montserrat text-lg md:text-xl text-(--color-off-white)/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Dzięki wsparciu naszych Patronów możemy rozwijać działalność
              artystyczną, nagrywać nowe płyty i występować na międzynarodowych
              scenach. Każda złotówka przybliża nas do kolejnych muzycznych
              marzeń.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://patronite.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-(--color-champagne-gold) text-(--color-soft-charcoal) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold)/90 transition-all duration-300"
              >
                <Heart size={18} className="mr-2" />
                Zostań patronem
                <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-6">
              Dlaczego{" "}
              <span className="text-(--color-champagne-gold)">warto</span> nas
              wesprzeć?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nowe nagrania",
                description:
                  "Twoje wsparcie pozwala nam nagrywać kolejne albumy i realizować ambitne projekty muzyczne.",
              },
              {
                title: "Międzynarodowe tournée",
                description:
                  "Dzięki Patronom możemy występować na prestiżowych festiwalach w całej Europie.",
              },
              {
                title: "Rozwój repertuaru",
                description:
                  "Wasze darowizny umożliwiają nam pracę z najlepszymi kompozytorami i aranżerami.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-(--color-off-white)/10 hover:border-(--color-champagne-gold)/30 transition-colors"
              >
                <h3 className="font-playfair text-2xl text-(--color-off-white) mb-4">
                  {item.title}
                </h3>
                <p className="text-(--color-off-white)/60 font-montserrat leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Gratitude */}
      <section className="py-24 px-6  bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal)">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              Ściana Wdzięczności
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white)">
              Nasi Patroni
            </h2>
            <p className="text-(--color-off-white)/60 font-montserrat mt-4">
              Dziękujemy wszystkim, którzy wspierają naszą misję
            </p>
          </motion.div>

          <div className="space-y-10">
            {tierOrder.map((tier) => {
              const tierPatrons =
                groupedPatrons[tier as keyof typeof groupedPatrons];
              if (tierPatrons.length === 0) return null;
              const config = tierConfig[tier as keyof typeof tierConfig];
              const Icon = config.icon;
              const useList =
                tier === "bosman" ||
                tier === "marynarz" ||
                tier === "mat_podchorazy";
              const listEmphasis = tier === "bosman";

              return (
                <motion.div
                  key={tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-10 h-10 ${config.bg} flex items-center justify-center`}
                    >
                      <Icon size={24} className={config.color} />
                    </div>
                    <h3 className={`font-playfair text-xl ${config.color}`}>
                      {config.label}
                    </h3>
                    <div className="flex-1 h-px bg-(--color-off-white)/10" />
                  </div>

                  {useList ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                      {tierPatrons.map((patron, index) => (
                        <motion.div
                          key={patron.id}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.02 }}
                          className={`text-(--color-off-white)/80 font-montserrat text-sm ${
                            listEmphasis
                              ? "font-semibold text-(--color-off-white)"
                              : ""
                          }`}
                        >
                          <span className="text-(--color-champagne-gold)">
                            •
                          </span>{" "}
                          {patron.name}
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {tierPatrons.map((patron, index) => (
                        <motion.div
                          key={patron.id}
                          initial={{ opacity: 0, scale: 0.97 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className={`p-4 border ${config.border} ${config.bg} backdrop-blur-sm shadow-lg`}
                        >
                          <h4 className="font-montserrat font-semibold text-(--color-off-white)">
                            {patron.name}
                          </h4>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) mb-6">
              Dołącz do{" "}
              <span className="text-(--color-champagne-gold)">
                grona patronów
              </span>
            </h2>
            <p className="text-(--color-off-white)/70 font-montserrat leading-relaxed mb-10">
              Każde wsparcie, niezależnie od wysokości, jest dla nas niezwykle
              cenne. Razem tworzymy muzykę, która porusza serca!
            </p>
            <a
              href="https://patronite.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-(--color-champagne-gold) text-(--color-soft-charcoal) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold)/90 transition-all duration-300"
            >
              <Heart size={18} className="mr-2" />
              Wesprzyj nas
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
