import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import { SpecializedTrack } from "@/components/widgets/SpecializedTrack";
import ProgramOutcome from "@/components/widgets/ProgramOutcome";
export default function Home() {
  return (
    <>
      {/* Hero section*/}
      <Hero />
      {/* Core Track Section*/}
      <CoreTracks />
      {/* Specialized Tracks */}
      <SpecializedTrack />
      {/* outcome section */}
      <ProgramOutcome />
    </>
  );
}
