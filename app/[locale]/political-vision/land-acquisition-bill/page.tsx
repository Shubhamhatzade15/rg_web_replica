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
              Land Acquisition Bill
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
            <Breadcrumb pageName="Land Acquisition Bill" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              Is economic growth and social equity mutually exclusive? This is
              one of the most pertinent questions of our time. While
              infrastructural development and monetary growth are important for
              our country, it cannot be at the cost of the people, it cannot be
              at the cost of the farmers, and it cannot be at the cost of the
              poor. The Land Acquisition Rehabilitation and Resettlement Act
              2013 (LARR), is designed to protect the farmers and the poor from
              exploitation by rich corporates and public private partnerships.
              It is our belief that we must enforce this Act and ensure it is
              implemented to the true letter of the law.
              <br />
              <br />
              As it stands today, the state is guilty of possessing significant
              land banks acquired for either public or social purposes, that
              remain completely unused. The loss to farmers&apos; capital
              appreciation is immense - especially in the last decade when
              India&apos;s economy was booming. The 2013 Land Act - implemented
              by the UPA - provides for the return of un-utilised acquired land,
              within a period of five years. The LARR Act was purposefully
              constructed as pro-farmer, not pro-corporate - following the
              UPA&apos;s legacy of pro-farmer land acquisition policies. The
              process for land acquisition under the Act involves a Social
              Impact Assessment Survey that offers a series of checks and
              balances prior to allowing the land to be acquired. For instance,
              there must be a preliminary notification stating intent for
              acquisition, compensation has to be given by a predetermined date,
              and rehabilitation and resettlement must be provided to the
              affected persons.
              <br />
              <br />
              In terms of the compensation, the UPA government insisted on fair
              compensation for both rural and urban areas, hence for rural areas
              the rate must be four times that of the market price and two times
              for urban areas. In such cases where the land is being acquired by
              private companies or in the cases of Public Private Partnerships,
              the organisation must receive consent from 80% of the displaced
              people. In these cases, the corporate must also provide
              rehabilitation and resettlement to the displaced peoples. The Act
              was designed in a manner that would make land acquisition both
              fair and equitable, it benefits the farmers immensely and ensures
              their land cannot be acquired without their consent - this should
              apply even in cases when the farmer is unable to repay loans,
              their land is theirs and the government must find alternate
              methods to recover the loan.
              <br />
              <br />
              In a country where 70% of the population lives in rural areas, the
              LARR is incredibly important, especially to safeguard people from
              losing what is rightfully theirs. The benefits of LARR is for the
              poor, for the farmers and for the marginalised. The fight that it
              took to pass the LARR Bill was completely worth the effort because
              the people that will reap these benefits are the people who need
              it most, the people that the Congress will never leave behind, the
              people that helped build this nation and the people that will do
              so long after we are gone.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
