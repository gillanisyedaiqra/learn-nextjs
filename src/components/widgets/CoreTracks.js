"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Wrapper_1 = __importDefault(require("@/components/shared/Wrapper"));
const Button_1 = __importDefault(require("@/components/shared/Button"));
const QuarterBox_1 = __importDefault(require("@/components/shared/QuarterBox"));
const CoreTrackData = [
    {
        header: "Quarter I",
        description: "CS-101: Object-Oriented Programming using TypeScript",
        number: 1,
    },
    {
        header: "Quarter II",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 2,
    },
    {
        header: "Quarter III",
        description: "CS-101: Object-Oriented Programming using  $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        number: 3,
    },
];
function CoreTracks() {
    //   const header = "Core Courses \n (Common in All Specializations)";
    return (<section className="mt-16 lg:mt-28">
      <Wrapper_1.default>
        <div className="max-w-screen-md">
          <h4 className="text-teal-700 font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          <div className="text-5xl font-bold whitespace-pre-line ">
            <h2> Core Courses </h2>
          </div>
          <div className="text-5xl font-bold whitespace-pre-line ">
            <h2> (Common in All Specializations): </h2>
          </div>
          {/* <h2 className="text-5xl font-bold whitespace-pre-line">{header}</h2> */}
          <p className="mt-6 text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses.
          </p>
          <div className="mt-5">
            <Button_1.default text="Learn More"/>
          </div>
        </div>
        {/* boxes */}
        {/* <div className="border rounded-md w-4/12 relative px-8 py-12">
            <h4 className="font-bold text-lg"> Quarter I</h4>
            <p className="mt-2 text-slate-600">
              CS-101: Object-Oriented Programming using TypeScript
            </p>
            <div className="absolute text-gray-200 top-0 right-10 text-9xl font-bold -z-10">
              1
            </div>
          </div>
          <div className="border rounded-md w-4/12 relative px-8 py-12">
            <h4 className="font-bold text-lg"> Quarter I</h4>
            <p className="mt-2 text-slate-600">
              CS-101: Object-Oriented Programming using TypeScript
            </p>
            <div className="absolute text-gray-200 top-0 right-10 text-9xl font-bold -z-10">
              1
            </div>
          </div>
          <div className="border rounded-md w-4/12 relative px-8 py-12">
            <h4 className="font-bold text-lg"> Quarter I</h4>
            <p className="mt-2 text-slate-600">
              CS-101: Object-Oriented Programming using TypeScript
            </p>
            <div className="absolute text-gray-200 top-0 right-10 text-9xl font-bold -z-10">
              1
            </div>
          </div> */}
        <div className="my-20 flex  flex-col md:flex-row gap-x-4 gap-y-6 ">
          {CoreTrackData.map((item, i) => (<QuarterBox_1.default description={item.description} header={item.header} number={item.number} haveBorder={true}/>))}
        </div>
      </Wrapper_1.default>
    </section>);
}
exports.default = CoreTracks;
