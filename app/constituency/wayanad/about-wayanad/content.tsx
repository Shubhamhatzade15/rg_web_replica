import React from "react";

import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGoogleFill,
} from "react-icons/ri";

import BreadCrumb from "./breadcrumb";

import { Montserrat, Inter, Roboto_Mono, Roboto_Flex } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });
const roboto_f = Roboto_Flex({ subsets: ["latin"] });

const data1 = [
  "Projects worth Rs. 4.61 crores sanctioned under MPLADS for 2019-2020",
  "Flood relief work and visit to relief camps post floods. Relief kits delivered to over 18,000 families",
  "Written to Union Ministries and State Government for rehabilitation and post-flood reconstruction work (including Ministry of Road Transport and Highway, Ministry of Health and Ministry of Tribal Affairs, Ministry of Rural Development)",
  "Wrote to the Reserve Bank of India to extend the moratorium on repayment of farm loans post the floods",
  "Raised the issue of night traffic ban on NH-766 with the Union Government, State Government. Also raised the issue in Parliament",
  "Raised the issue of Nanjangode Nilambur railway line in Parliament",
  "Wrote to the Ministry of Finance on high rate of GST on Cochlear Implant accessories",
  "Wrote to Ministry of Food Processing for setting up food park in Wayanad",
  "Wrote to Ministry of Commerce for setting up of spice park in Wayanad",
];

const data2 = [
  "Projects worth Rs. 2.70 crores to contain COVID 19",
  "50 thermal scanners, 20000 masks and 1000 liters of sanitizer",
  "28,000 kgs rice and 5600 kgs of pulses",
  "One time medical assistance of Rs. 28 lakhs to 1000 kidney and liver patients",
  "Intervened to bring back Keralities stranded in different parts of the country and coordinated with relevant district administration of places where people from the parliamentary constituency are stranded",
];

const links = [
  "https://www.news18.com/news/india/rahul-gandhi-visits-relief-camps-in-flood-hit-wayanad-2286371.html",
  "https://www.ndtv.com/kerala-news/rahul-gandhi-gets-flood-relief-material-delivered-in-wayanad-2086213",
  "https://www.hindustantimes.com/india-news/seeking-help-for-flood-hit-wayanad-rahul-gandhi-pens-letter-harsh-vardhan-nitin-gadkari/story-QTD5eeAIsFb3acszbC2bvL.html",
  "https://www.thehindubusinessline.com/news/national/give-flood-hit-kerala-farmers-more-time-to-repay-loans-rahul-to-rbi-chief/article29094255.ece",
  "https://economictimes.indiatimes.com/news/politics-and-nation/kerala-rahul-gandhi-meets-cm-vijayan-to-discuss-flood-relief-efforts-in-state/videoshow/71388921.cms?from=mdr",
  "https://www.dtnext.in/News/National/2020/04/29100625/1227430/Rahul-Gandhi-assures-help-to-patients-in-Wayanad.vpf",
];

function content() {
  return (
    <div
      className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <div className="order-2 md:order-1 text-3xl">About Wayanad</div>
          <div className="order-1 md:order-2 grid grid-cols-4 gap-2 text-xl">
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiFacebookFill />
            </div>
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiTwitterFill />
            </div>
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiLinkedinFill />
            </div>
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiGoogleFill />
            </div>
          </div>
        </div>

        {/* Bread crumb */}

        <div className="mt-5 bg-gray-100 ">
          <BreadCrumb />
        </div>

        {/* Project Details */}

        <div
          className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
        >
          <p>
            Wayanad is one of the most demographically diverse parliamentary
            constituencies in Kerala. The constituency is home to the largest
            population of scheduled tribes in Kerala and significant population
            of religious minorities. Wayanad is also blessed with rich
            biodiversity and has attracted farmers, merchants and traders for
            hundreds of years. However, the constituency faces several
            challenges in its development trajectory. Wayanad district is the
            only aspirational district in Kerala. A difficult terrain, limited
            connectivity, fragile ecosystem and the adverse impact of climate
            change pose severe challenges to its development trajectory.
          </p>
          <br />
          <p>
            Shri. Rahul Gandhi&apos;s term began with the devastating floods in
            2019. Two consecutive floods in 2018 and 2019 uprooted the lives and
            livelihoods of thousands of people. The MP organized relief
            materials for over 18,000 families and surveyed flood hit areas.
            Relief packages, cleaning kits etc. were distributed to thousands of
            flood affected households. He was instrumental in raising critical
            issues with the Central Government, including extending the
            moratorium on repayment of farm loans, urgent repair of road
            infrastructure and expansion of MGREGA. The MP continues to monitor
            post-flood rehabilitation efforts and engages with affected
            communities to rebuild their lives.
          </p>
          <br />
          <p>
            Projects worth 4.61 crores have been sanctioned under MPLADS program
            for the year 2019-2021. Over 40 projects were recommended, before
            the MPLADS scheme was suspended abruptly for two years. Projects
            ranging from purchase of vehicle for community health care centre,
            equipment for computer lab and construction of Anganwadi centre
            (Samskarikanilayam) have been sanctioned. Medical equipment, PPEs,
            masks etc. worth Rs. 2.70 crores were procured for the fight against
            the COVID-19 pandemic under the MPLADS program.
          </p>
          <br />
          <p>
            To bolster the efforts of the district administration during the
            lockdown, 50 thermal scanners, 20000 masks and 1000 liters of
            sanitizer were donated. 28,000 kgs rice and 5600 kgs of pulses were
            contributed to the community kitchens. Since a significant number of
            people with other health ailments, especially kidney and liver
            related conditions require assistance, a one-time medical assistance
            of Rs. 28 lakhs was announced to help 1000 needy patients. Further,
            assistance was provided to constituents stranded in different parts
            of the country during the lockdown.
          </p>
          <br />
          <p>
            The people of Wayanad have several longstanding demands, including
            lifting the night traffic ban on NH-766, the construction of a
            government medical college in Wayanad district and the urgent
            completion of the Nanjangud-Nilambur railway line. Shri. Rahul
            Gandhi has taken up these demands with the respective Union
            Ministries and the State Government. He has also raised these issues
            in Parliament and continues to advocate for a feasible solution.
          </p>
        </div>

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl">
            Summary of Initiatives-
          </p>
          <ul
            className={`list-circle mt-3 mx-5 font-light text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            {data1.map((item, index) => (
              <li key={index + 1}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="underline font-medium text-2xl">COVID Response</p>
          <ul
            className={`list-circle mt-3 mx-5 font-light text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            {data2.map((item, index) => (
              <li key={index + 1}>{item}</li>
            ))}
          </ul>
        </div>

        {/* final links */}

        <div className={`mt-5 ${mons.className} text-sm text-[#2F7CB7]`}>
          <div className=" border-t-2 border-black border-dotted">
            {links.map((item, index) => (
              <div
                key={index + 1}
                className="block py-4 px-2 border-b-2 border-black border-dotted w-full group cursor-pointer"
              >
                <a href={item} className="block w-full h-full hover:underline">
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default content;
