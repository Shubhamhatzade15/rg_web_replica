import React from "react";

import Hero from "../Hero";
import Breadcrumb from "../BreadCrumb";

import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGoogleFill,
  RiInstagramFill,
} from "react-icons/ri";

import { Montserrat, Roboto_Flex } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });
const roboto_f = Roboto_Flex({ subsets: ["latin"] });

const hero_banner = "/assets/LandingPage/hero_new.jpg";

export default function page() {
  return (
    <div>
      <Hero bannerSrc={hero_banner} />
      <div
        className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
      >
        <div className="px-4 md:px-10">
          <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
            <div className="order-2 md:order-1 text-3xl text-[#032B5B]">
              National Rural Employment Guarantee Act
            </div>
            <div className="order-1 md:order-2 grid grid-cols-4 gap-2 text-xl">
              <a
                href="https://www.facebook.com/people/Prashant-Padole/pfbid02ERmQbJSVCTfsvsEyJqJR9Cr7rY7aENGSdVZ65vPfmSHosLcyjFJY3sbqTvBCKval/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                  <RiFacebookFill />
                </div>
              </a>

              <a
                href="https://twitter.com/_Prashantpadole"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                  <RiTwitterFill />
                </div>
              </a>

              <a
                href="https://www.instagram.com/drprashantpadole"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                  <RiInstagramFill />
                </div>
              </a>
            </div>
          </div>

          {/* Bread crumb */}

          <div className="mt-5 bg-gray-100 ">
            <Breadcrumb pageName="National Rural Employment Guarantee Act" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              India is not a nation of freeloaders. We wrested our freedom from
              the British through pure tenacity and it is this very tenacity
              that runs in our blood to this very day. Our farmers, labourers,
              artisans, craftsmen, and the rest of the working class are a
              classic example of this. Our greatest strength has been our labour
              force that is willing to work hard, work sincerely, and work well
              every single day. It was this rock-solid work ethic that NREGA - a
              program the World Bank calls “a stellar example of rural
              development” - tapped into. People were suffering not due to a
              lack of skill or fear of hard work, but a lack of opportunity to
              do so. So, in 2005, we developed a scheme to remove this barrier
              and demonstrate the Congress&apos;s approach towards social
              welfare.
              <br />
              <br />
              NREGA represents the Congress&apos;s commitment to a decentralised
              policy structure by allowing the Panchayati system to implement
              the policy specifics. It also personifies our bottom up approach
              to policy making - NREGA was implemented after a Congress worker
              presented his findings of a smaller scale NREGA style policy that
              was carried out in his district. NREGA has been created to provide
              the people with a fundamental right - the right to work and to
              provide for themselves, their families and escape the clutches of
              poverty.
              <br />
              <br />
              We placed our faith in our fellow Indians, and they have not let
              us down. Since its inception, NREGA has had a transformational
              impact on our rural economy. Every year, this scheme has provided
              employment to over 5 crore households, on average. The average
              wage earned by a citizen for a day&apos;s work has gone up by 81%.
              Marginalised communities have benefited - women account for 47%
              and those from the SC and ST communities for 51% of total
              person-days of work generated- well above the 33% baseline
              standard we set for ourselves.
              <br />
              <br />
              The scheme has worked due to two reasons - our faith in the grit
              and determination of Indians and because we put our money where
              our mouth is. We invested Rs. 35,000 crore in our people, offering
              them opportunities to earn an honest living. As we expected, they
              turned out in record numbers to do so. to.
              <br />
              <br />
              WA recent Brookings report revealed India no longer holds the
              dubious distinction of being home to the largest number of poor
              people and has moved down in the global poverty rankings. The
              report credits this achievement to the foresight of former PM Dr.
              Manmohan Singh and his economic policies that helped the India
              experience rapid growth between 2004 and 2011. It also credits the
              massive reduction of poverty to NREGA, which has prevented over 14
              crore Indians from falling into a life of poverty and reduced
              poverty by 32%.
              <br />
              <br />
              Our country is on the precipice of achieving unimaginable success
              and there is plenty of work to be done - NREGA, too, must evolve
              with the people it serves. The Congress party since its inception
              has evolved with the changing times and the changing needs of the
              people. Today our greatest need is to create a jobs for our
              growing working population and NREGA, is one means to fulfil that
              need.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
