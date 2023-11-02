"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoreTracks_1 = __importDefault(require("@/components/widgets/CoreTracks"));
const Hero_1 = __importDefault(require("@/components/widgets/Hero"));
const SpecializedTrack_1 = require("@/components/widgets/SpecializedTrack");
const ProgramOutcome_1 = __importDefault(require("@/components/widgets/ProgramOutcome"));
function Home() {
    return (<>
      {/* Hero section*/}
      <Hero_1.default />
      {/* Core Track Section*/}
      <CoreTracks_1.default />
      {/* Specialized Tracks */}
      <SpecializedTrack_1.SpecializedTrack />
      {/* outcome section */}
      <ProgramOutcome_1.default />
    </>);
}
exports.default = Home;
