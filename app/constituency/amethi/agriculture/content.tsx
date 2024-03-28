import React from "react";

import Image from "next/image";

import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGoogleFill,
} from "react-icons/ri";

import BreadCrumb from "./breadcrumb";

import { Montserrat, Roboto_Flex } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });
const roboto_f = Roboto_Flex({ subsets: ["latin"] });

const Agri1 = "/amethi-agri/Agriculture1.jpg";
const Agri2 = "/amethi-agri/Agriculture2.jpg";
const Agri3 = "/amethi-agri/Agriculture3.jpg";
const sorry = "/amethi-agri/sorry.png";

function content() {
  return (
    <div
      className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <div className="order-2 md:order-1 text-3xl text-[#032B5B]">
            Agriculture
          </div>
          <div className="order-1 md:order-2 grid grid-cols-4 gap-2 text-xl">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://rahulgandhi.in/amethi/about-amethi&picture=https://rahulgandhi.inhttps://rahulgandhi.in/images/rg_about_us_6aug2018.jpg?1533532960&title=About Amethi&description=About Amethi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                <RiFacebookFill />
              </div>
            </a>

            <a
              href="https://twitter.com/share?text=About Amethi&url=https://rahulgandhi.in/amethi/about-amethi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                <RiTwitterFill />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/shareissue?mini=true&url=https://rahulgandhi.in/amethi/about-amethi&title=About Amethi&summary=About Amethi&source=INC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                <RiLinkedinFill />
              </div>
            </a>

            <a
              href="https://plus.google.com/share?url=https://rahulgandhi.in/amethi/about-amethi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                <RiGoogleFill />
              </div>
            </a>
          </div>
        </div>

        {/* Bread crumb */}

        <div className="mt-5 bg-gray-100 ">
          <BreadCrumb />
        </div>

        {/* About Amethi */}

        <div
          className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
        >
          <p>
            Agriculture remains one the most important means of livelihood for
            the people of Amethi. Despite growing employment opportunities in
            the district owing to{" "}
            <span className="text-[#337ab7] hover:underline hover:text-[#032B5B] hover:italic">
              <a href="/industry">accelerated industrialisation</a>
            </span>
            , agriculture is preferred by a large section of people in Amethi. A
            few decades ago, in the early 1980s, majority of the land in Amethi
            was barren and alkaline making agriculture impossible. There was no
            food production and the farmers could barely produce enough to
            survive. When Rajiv Gandhi was elected as an MP from the district,
            he undertook immediate measures to redress this situation. He
            invited the Indian Farmers Fertiliser Cooperative (IFFCO) and other
            expert bodies to make the land cultivable. After persistent efforts
            over many years, farming became a feasible economic activity. The
            farmers were also introduced to modern techniques of agriculture and
            proper irrigation facilities were provided to help them effectively
            cultivate the land.
          </p>
        </div>

        {/* Bhel */}

        <div className="mt-5">
          <div className="w-full mt-3">
            <Image
              src={Agri1}
              alt="agri1"
              width={1920}
              height={717}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              Fields in Gauriganj
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            When{" "}
            <span className="text-[#337ab7] hover:underline hover:text-[#032B5B] hover:italic">
              <a href="/">Rahul Gandhi</a>
            </span>{" "}
            was elected as MP in 2004, he prioritised the needs and requirements
            of the farmers and made provisions to create an environment
            conducive to farming. In an effort to continue the measures
            initiated by Rajiv Gandhi to nurture agricultural growth, he
            introduced new farming methods like compost harvesting which served
            to expand agricultural production. Today,{" "}
            <span className="text-[#337ab7] hover:underline hover:text-[#032B5B] hover:italic">
              <a href="/about-amethi">Amethi</a>
            </span>{" "}
            has a wide expanse of lush green fields and forests, spread out over
            an area of 144683 hectares of cultivable land of which 129766
            hectares has provisions for irrigation. There are also nine centres
            of Indian Farm Forestry Development Cooperative Ltd (IFFCO) which
            coordinates farm forestry and ecological resilience in the area.
          </p>
        </div>

        {/* Sorry image */}

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
            Steel Authority of India Limited
          </p>
          <div className="w-full mt-3">
            <Image
              src={sorry}
              alt="sorry"
              width={4000}
              height={2248}
              className="block h-auto w-full"
            />
          </div>
          <p
            className={`mt-3 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            Amethi has also developed a sophisticated system of dairy production
            which has led to increase in the production of milk. The National
            Dairy Development Board has an Animal Breeding Centre here. Chiller
            points and 107 dairy farms set up across the district have also
            enhanced the production, storage and distribution capacity.
          </p>
        </div>

        {/* Images of other works */}

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full">
            <Image
              src={Agri2}
              alt="Animal Breeding Centre in Amethi"
              width={1000}
              height={500}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              Animal Breeding Centre in Amethi
            </p>
          </div>
          <div className="w-full">
            <Image
              src={Agri3}
              alt="Rahul Gandhi inaugurating National Animal Breeding and Dairy Development plant"
              width={1000}
              height={500}
              className="block h-auto w-full"
            />
            <p className=" text-pretty text-xs md:text-sm italic text-[#032B5B]">
              Rahul Gandhi inaugurating National Animal Breeding and Dairy
              Development plant
            </p>
          </div>
        </div>

        {/* Other industries and employement opportunities */}
      </div>
    </div>
  );
}

export default content;
