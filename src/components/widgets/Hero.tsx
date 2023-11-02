import Wrapper from "@/components/shared/Wrapper";
import heroPoster from "@/assets/images/hero-poster.png";
import Image from "next/image";
//Components
import Button from "@/components/shared/Button";
const Hero = () => {
  return (
    <section className="bg-white">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* left side */}
          <div className="flex-1">
            <h4 className="text-teal-700 font-semibold text-lg mt-4">
              Presidential initiative for Artifical Intelligence and
              Computing(PIAIC)
            </h4>
            <h1 className="text-2xl sm:text-6xl font-bold text-gray-900 md:text-red-400 lg:text-blue-700">
              {" "}
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              A one and Quarter years Panaverse Dao earn as you learn program
              getting ready for the next generation of the internent
            </p>
            <p className="mt-1 text-xl text-slate-600">
              Consolidating web 3.0 metaverse, Artifical
              Intelligence(AI),Cloud,Edge, Ambient computing, IOT, Network
              Automation and Bioinformatics technologies
            </p>
            <div className="mt-6">
              <Button text={"Enrolled Now"} />
            </div>
          </div>
          {/* right side */}
          <div className="flex-1">
            <Image src={heroPoster} alt="hero poster"></Image>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
