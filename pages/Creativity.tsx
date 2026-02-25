import Discography from "@/components/creativity/Discography";
import Hero from "@/components/creativity/Hero";
import SeeRepertoire from "@/components/creativity/SeeRepertoire";
import Streamings from "@/components/creativity/Streamings";
import Videos from "@/components/creativity/Videos";

export default function Creativity() {

  return (
    <div className="bg-(--color-soft-charcoal) min-h-screen">
      <Hero />
      <Streamings />
            <Videos />
      <Discography />

      <SeeRepertoire />
    </div>
  );
}
