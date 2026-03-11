import Awards from "@/components/conductor/Awards";
import Biography from "@/components/conductor/Biography";
import Hero from "@/components/conductor/Hero";

export default function Conductor() {

  return (
    <div className="bg-(--color-soft-charcoal)">
      <Hero />
      <Biography />
      <Awards />
    </div>
  );
}
