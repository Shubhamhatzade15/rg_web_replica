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

const con1 = "/connectivity/connectivity.jpg";
const con2 = "/connectivity/road.jpg";
const con3 = "/connectivity/rail.jpg";

function content() {
  return (
    <div
      className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <div className="order-2 md:order-1 text-3xl text-[#032B5B]">
            Connectivity
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
            The development of any region requires an extensive and
            well-connected network of roads and railways. Prior to the 1980’s,
            Amethi was isolated and cut off from other regions, making any kind
            of trade and movement extremely arduous. Recognising the critical
            importance of connectivity for the progress of a region, former
            Prime Minister and MP from Amethi, Rajiv Gandhi laid the foundation
            for infrastructural development in the region. Elected in 2004,
            Rahul Gandhi took this vision forward and prioritised connectivity
            and mobility as one of his core areas of focus. Over his three term
            tenure, Amethi witnessed tremendous expanse in rail and road
            connectivity, shaping its formation as an industrial hub.
          </p>
        </div>

        {/* Connectivity-1 */}

        <div className="mt-5">
          <div className="w-full mt-3">
            <Image
              src={con1}
              alt="con1"
              width={1000}
              height={500}
              className="block h-auto w-full"
            />
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            During the tenure of Rahul Gandhi, six national highways and an
            array of state highways were constructed, significantly contributing
            towards mobility and trade. A network of roads was constructed
            within the district connecting every village to the centre of the
            town. Every person residing in any village in Amethi is connected to
            the nearest national/state highway within 15 kms radius which is
            further linked to other major cities. Within the state, Amethi
            provides access via road to major cities such as Varanasi, Agra,
            Kanpur, Lucknow etc and also connects to major cities outside Uttar
            Pradesh such as Delhi and Bhopal. Massive strides in road
            infrastructure have resulted in making Amethi a strategic location
            for trade and investment.
          </p>
        </div>

        {/* Roads */}

        <div className="mt-5">
          <div className="w-full mt-3">
            <Image
              src={con2}
              alt="roads"
              width={1351}
              height={1600}
              className="block h-auto w-full"
            />
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            Rahul Gandhi envisioned an Amethi which is connected to the rest of
            India wherein every resident of Amethi has the opportunity to
            fulfill her/his aspirations. By ensuring last mile connectivity to
            the people of Amethi, Rahul Gandhi has facilitated commute of people
            and mobility of freight. Railway stations in Amethi, Jais,
            Musafirkhana and Nihalgarh are amongst the most prominent ones
            providing regular connectivity to all major cities across UP and the
            country. The people of Amethi can now travel to Jammu, Bangalore,
            Mumbai and Visakhapatnam via the Amethi station, whereas the
            business community of Amethi largely benefit from the Nihalgarh
            station catering to the industrial hub of Jagdishpur by providing
            access to cities like Agra, Varanasi, Kanpur and Lucknow. Direct
            connection via rail within and from Amethi have encouraged
            industries to set up factories, contributing to both growth and
            livelihood.
          </p>
        </div>

        {/* Roads */}

        <div className="mt-5">
          <div className="w-full mt-3">
            <Image
              src={con3}
              alt="rail"
              width={2420}
              height={2866}
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* Other industries and employement opportunities */}
      </div>
    </div>
  );
}

export default content;
