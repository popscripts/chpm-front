import SectionWrapper from "../layout/SectionWrapper";
import MusicVideosList from "../ui/MusicVideosList";
import SectionHeader from "../ui/SectionHeader";

function Videos() {
  return (
    <SectionWrapper
      id="teledyski"
      background="tealRadial"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Teledyski"
          title="Zobacz nasze teledyski"
          description="Nasze nagrania są wspierane przez profesjonalne teledyski, które tworzymy we współpracy z utalentowanymi reżyserami i ekipami filmowymi"
          className="mb-8"
        />
        <MusicVideosList />
      </div>
    </SectionWrapper>
  );
}

export default Videos;
