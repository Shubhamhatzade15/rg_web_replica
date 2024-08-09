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

const BHEL = "/amethi-industry/bhel.jpg";
const SAIL = "/amethi-industry/sail.jpg";
const RailNeer = "/amethi-industry/Rail_Neer.jpg";
const HAL = "/amethi-industry/hal.jpg";
const Ordnance = "/amethi-industry/Ordnance_Factory.jpg";
const Shalimar = "/amethi-industry/shalimar.jpg";
const AAC = "/amethi-industry/aac.jpg";

function content() {
  return (
    <div
      className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <div className="order-2 md:order-1 text-3xl text-[#032B5B]">
            Industry
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
            Amethi has been an agri-based society and it has been{" "}
            <span className="text-[#337ab7] hover:underline hover:text-[#032B5B] hover:italic">
              <a href="/issues">Rahul Gandhi&apos;s vision</a>
            </span>{" "}
            to encourage industrialisation, thus providing wider scope of
            employment to the people of Amethi. A mixed model of development has
            been adopted where the attempt has been to accommodate
            industrialisation while promoting agriculture. Rahul Gandhi strongly
            believes in active stakeholder participation and therefore
            industrialisation is achieved through and in consultation with the
            people. This has ensured that while heavy and medium industries have
            been established, it has not happened at the cost of traditional
            means of livelihood. Several industries have been set up in Amethi
            since the 1980s, opening up avenues for employment to the people of
            the district.
          </p>
        </div>

        {/* Bhel */}

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
            Bharat Heavy Electricals Limited
          </p>
          <div className="w-full mt-3">
            <Image
              src={BHEL}
              alt="BHEL"
              width={512}
              height={256}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              Entrance to BHEL{" "}
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            Set up in 1983 by Rajiv Gandhi in the Jagdishpur industrial area,
            BHEL was one of the first heavy industries to be established in
            Amethi. It includes a fabrication plant and a centralised stamping
            unit. In 2009-10,{" "}
            <span className="text-[#337ab7] hover:underline hover:text-[#032B5B] hover:italic">
              <a href="/">Rahul Gandhi</a>
            </span>{" "}
            facilitated the expansion of BHEL with an investment of Rs. 367
            crore, providing employment opportunities for 1500 people. The plant
            produces 25000 tonnes of fabricated and machined components per year
            for power plant equipment.
          </p>
        </div>

        {/* SAIL */}

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
            Steel Authority of India Limited
          </p>
          <div className="w-full mt-3">
            <Image
              src={SAIL}
              alt="Sail"
              width={512}
              height={256}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              SAIL unit at Jagdishpur
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            In 2009, the defunct Malvika Steel was acquired by SAIL at its
            Jagdishpur plant at a cost of Rs. 510 crores. Three units have been
            added which includes TMT Bar Mill, Galvanized Sheet Corrugation Unit
            and Crash Barrier Manufacturing Unit. This initiative will provide
            employment to around 700 people in Amethi.
          </p>
        </div>

        {/* Rail Neer */}

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
            Rail Neer
          </p>
          <div className="w-full mt-3">
            <Image
              src={RailNeer}
              alt="RailNeer"
              width={1600}
              height={800}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              Rail Neer plant in Gauriganj
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            Amethi is home to one of the largest RAIL Neer plants in India. The
            plant, which manufactures bottled water for the Indian railways, was
            established in 2014 in Gauriganj at a total cost of Rs. 8 crore. It
            has the capacity to produce 72000 units of bottled water per day for
            the Indian Railways. The establishment of Rail Neer has opened
            another avenue of{" "}
            <span className="text-[#337ab7] hover:underline hover:text-[#032B5B] hover:italic">
              <a href="#">employment for the people of Amethi</a>
            </span>
            .
          </p>
        </div>

        {/* HAL */}

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
            Hindustan Aeronautics Limited
          </p>
          <div className="w-full mt-3">
            <Image
              src={HAL}
              alt="HAL"
              width={512}
              height={256}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              HAL campus in Korwa
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            Hindustan Aeronautics Limited, has been India&apos;s largest
            manufacturer of aeronautical defence equipment. For decades HAL has
            been producing state-of-the art weaponry & aircrafts that have
            helped consolidate India&apos;s formidable place in global power
            relations. In 1982 HAL set up a division in Amethi for the purpose
            of defence production for the Indian Air Force. The centre produces
            Display Attack Range and Inertial Navigation system for
            international aircrafts of the Air Force as well as avionic systems
            for MiG-27. The centre in Amethi provides employment for
            approximately 1100 skilled workers along with 200 engineers.
          </p>
        </div>

        {/* Ordnance Factory */}

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
            Ordnance Factory
          </p>
          <div className="w-full mt-3">
            <Image
              src={Ordnance}
              alt="Ordnance"
              width={1600}
              height={800}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              Ordnance Factory in Korwa
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            In 2007, Rahul Gandhi set up an Ordnance Factory in the HAL campus
            with an investment of Rs. 408 crores for the purpose of
            manufacturing carbines and other defence equipments. This step
            ensured that over 500 individuals would be provided formal
            employment.
          </p>
        </div>

        {/* Other industries and employement opportunities */}

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
            Other industries and employment opportunities
          </p>
          <div className="w-full mt-3">
            <Image
              src={Shalimar}
              alt="Shalimar"
              width={1600}
              height={800}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              Shalimar Pellet Feeds Ltd. in Jagdishpur
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            Advancing industrialisation and a growing market in Amethi in the
            last decade has also encouraged several private players to set up
            their manufacturing units in Amethi. Employment opportunities in the
            district have received a huge boost due to these private
            enterprises.
          </p>
          <br />
          <p
            className={`text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            The Indo Gulf Fertilizer Plant, set up in 1998, is a
            state-of-the-art manufacturing facility at Jagdishpur and is
            considered one of the most energy efficient plants in the country.
            It is located in the middle of the agricultural heartland of the
            Indo-Gangetic plains which gives it access to a large and growing
            market.
          </p>

          <div className="w-full mt-4">
            <Image
              src={AAC}
              alt="AAC"
              width={1600}
              height={800}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              ACC Tikaria Cement Works in Gauriganj
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            Both ACC Limited which is a leading producer of sand and cement and
            Shalimar Pellet Feeds which is involved in manufacture of grain mill
            products, starches and starch products, etc. act as major sources of
            employment for the people of Amethi. With increased and regular
            employment, the lives of the people of Amethi have changed
            drastically. The improved job scenario has steadily increased their
            purchasing power, improved human development indicators and they are
            now enjoying a better quality of life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default content;
