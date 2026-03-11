import MusicVideosList from "../ui/MusicVideosList";
import SectionHeader from "../ui/SectionHeader";

function Videos() {
  return (
    <section id="teledyski" className="scroll-mt-32 max-w-6xl mx-auto py-24 px-6 bg-(--color-soft-charcoal)">
      <SectionHeader eyebrow="Teledyski" title="Zobacz nasze teledyski" description="Nasze nagrania są wspierane przez profesjonalne teledyski, które tworzymy we współpracy z utalentowanymi reżyserami i ekipami filmowymi"  className="mb-8"/>
      <MusicVideosList />
    </section>
  );
}

export default Videos;
