"use client";

import React, { useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "@/components/shared/QuarterBox";
import Image from "next/image";
import Web3Img from "@/assets/images/metaverse.webp";
import AiImg from "@/assets/images/ai.webp";
import CloudImg from "@/assets/images/cloud.webp";

export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    Image: Web3Img,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
    Image: AiImg,

    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
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
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    Image: CloudImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    Image: Web3Img,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
    Image: AiImg,

    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
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
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    Image: CloudImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    Image: Web3Img,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
    Image: AiImg,

    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
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

export const SpecializedTrack = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");

  const selectedItemData = programsData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <section>
      <Wrapper>
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
            <h3 className=" text-2x1 font-bold">{selectedItemData?.header}</h3>
            <p className="text-lg text-slate-600 mt-2">
              {selectedItemData?.description}
            </p>
            <button className="text-teal-700 tet-x1 mt-4 underline">
              {" "}
              Learn More
            </button>
            <div className="flex col md:flex-row gap-4 mt-8">
              {selectedItemData?.quarters.map((item) => (
                <QuarterBox
                  key={item.number}
                  description={item.description}
                  header={item.header}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>

          {/* content right */}
          <div className="px-4  space-y-4 py-6 basis-4/12 background bg-slate-100 flex-1">
            {programsData.map((item, i) => (
              <div
                onClick={() => setSelectedItem(item.slug)}
                key={item.slug}
                className="flex gap-x-4 items center cursor-pointer"
              >
                <div className="flex-shrink-0 h-24 w-36">
                  {/* <div className=" w-20 h-16 rounded bg-red-800"></div> */}
                  <Image
                    src={item.Image}
                    alt={item.header}
                    className="h-24 object-cover rounded"
                  ></Image>
                </div>
                <div>
                  <h4 className="text-primary"> Specialized Track </h4>
                  <h3 className="text-x1 font semi-bold">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
