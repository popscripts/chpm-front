import { motion } from "framer-motion";
import { Award, Music, Trophy, Users } from "lucide-react";

const stats = [
  { icon: Users, number: "150+", label: "Członków zespołu" },
  { icon: Music, number: "800+", label: "Wykonanych koncertów" },
  { icon: Trophy, number: "100+", label: "Zdobytych nagród i wyróżnień" },
  { icon: Award, number: "50+", label: "Płyt i teledysków" }
];


function Stats() {
    return (
      <section className="py-24 px-6 bg-(--color-soft-charcoal)">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-(--color-champagne-gold)/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-(--color-champagne-gold)" />
                </div>
                <span className="block font-montserrat text-4xl text-(--color-champagne-gold) mb-2">{stat.number}</span>
                <span className="text-(--color-off-white)/60 font-montserrat text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>);
}

export default Stats;