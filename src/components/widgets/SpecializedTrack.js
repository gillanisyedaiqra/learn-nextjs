"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecializedTrack = exports.programsData = void 0;
const react_1 = __importStar(require("react"));
const Wrapper_1 = __importDefault(require("@/components/shared/Wrapper"));
const QuarterBox_1 = __importDefault(require("@/components/shared/QuarterBox"));
const image_1 = __importDefault(require("next/image"));
const metaverse_webp_1 = __importDefault(require("@/assets/images/metaverse.webp"));
const ai_webp_1 = __importDefault(require("@/assets/images/ai.webp"));
const cloud_webp_1 = __importDefault(require("@/assets/images/cloud.webp"));
exports.programsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        Image: metaverse_webp_1.default,
        quarters: [
            {
                header: "Quarter IV",
                description: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4,
            },
            {
                header: "Quarter V",
                description: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 5,
            },
        ],
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
        Image: ai_webp_1.default,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4,
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5,
            },
        ],
    },
    {
        slug: "cloud",
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        Image: cloud_webp_1.default,
        quarters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4,
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5,
            },
        ],
    },
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        Image: metaverse_webp_1.default,
        quarters: [
            {
                header: "Quarter IV",
                description: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4,
            },
            {
                header: "Quarter V",
                description: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 5,
            },
        ],
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
        Image: ai_webp_1.default,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4,
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5,
            },
        ],
    },
    {
        slug: "cloud",
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        Image: cloud_webp_1.default,
        quarters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4,
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5,
            },
        ],
    },
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        Image: metaverse_webp_1.default,
        quarters: [
            {
                header: "Quarter IV",
                description: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4,
            },
            {
                header: "Quarter V",
                description: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 5,
            },
        ],
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
        Image: ai_webp_1.default,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4,
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5,
            },
        ],
    },
];
const SpecializedTrack = () => {
    const [selectedItem, setSelectedItem] = (0, react_1.useState)("wmd");
    const selectedItemData = exports.programsData.find((item) => item.slug === selectedItem);
    return (<section>
      <Wrapper_1.default>
        <div>
          {/* header */}
          <h2 className="text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>{" "}
          <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">
            {" "}
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/*> content left */}
          <div className="shadow-xl sticky top-28 self-start basis basis-8/12 rounded-x1 border border-slate-200 py-8 px-8">
            <h4 className="text-primary text-lg font-medium">
              {" "}
              Specialized Track{" "}
            </h4>
            <h3 className=" text-2x1 font-bold">{selectedItemData === null || selectedItemData === void 0 ? void 0 : selectedItemData.header}</h3>
            <p className="text-lg text-slate-600 mt-2">
              {selectedItemData === null || selectedItemData === void 0 ? void 0 : selectedItemData.description}
            </p>
            <button className="text-teal-700 tet-x1 mt-4 underline">
              {" "}
              Learn More
            </button>
            <div className="flex col md:flex-row gap-4 mt-8">
              {selectedItemData === null || selectedItemData === void 0 ? void 0 : selectedItemData.quarters.map((item) => (<QuarterBox_1.default key={item.number} description={item.description} header={item.header} number={item.number} haveBorder={false}/>))}
            </div>
          </div>

          {/* content right */}
          <div className="px-4  space-y-4 py-6 basis-4/12 background bg-slate-100 flex-1">
            {exports.programsData.map((item, i) => (<div onClick={() => setSelectedItem(item.slug)} key={item.slug} className="flex gap-x-4 items center cursor-pointer">
                <div className="flex-shrink-0 h-24 w-36">
                  {/* <div className=" w-20 h-16 rounded bg-red-800"></div> */}
                  <image_1.default src={item.Image} alt={item.header} className="h-24 object-cover rounded"></image_1.default>
                </div>
                <div>
                  <h4 className="text-primary"> Specialized Track </h4>
                  <h3 className="text-x1 font semi-bold">{item.header}</h3>
                </div>
              </div>))}
          </div>
        </div>
      </Wrapper_1.default>
    </section>);
};
exports.SpecializedTrack = SpecializedTrack;
