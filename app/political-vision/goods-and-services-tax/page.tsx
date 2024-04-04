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
              Goods and Services Tax
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
            <Breadcrumb pageName="Goods and Services Tax" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              The Goods and Services Tax was first introduced during the UPA II
              government in 2011, as a Constitutional Amendment. The idea was to
              create a single tax for the country that would subsume CENVAT,
              CVD, SAD, VAT and state taxes; it is a single levy at the final
              point of consumption. The Bill gave Central and State governments
              concurrent powers to introduce laws on taxation of goods and
              services. GST was designed to make business easier for the market
              and cost of living cheaper for the common man.
              <br />
              <br />
              The attributes of the GST proposed by the Congress party are
              simple - there would only be a single slab and there would be a
              cap of 18%. Goods and services consumed by weaker sections of
              society would be left out of the tax ambit, thereby improving
              their quality of life and reducing cost of living. It is
              imperative to cap the tax at 18% so as to ensure state governments
              will not attempt to lobby for extra taxes over and above GST. We
              will also bring petrol, diesel and natural gas in the ambit of GST
              so as to save the common man from the burden of increasing fuel
              prices.
              <br />
              <br />
              The Bill also provided for the creation of a GST Dispute
              Settlement Authority that was able to adjudicate disputes between
              central and state governments which had the potential to result in
              loss of revenue or affect the harmonised tax structure. It also
              ensures there would be no additional levy of 1% on supply of goods
              over and above GST. Since the tax is levied at point of
              consumption, 1% levy will create distortions in the tax structure.
              This has been pointed out by several economists who argue that
              there is no point in implementing GST with an additional levy.
              <br />
              <br />
              The current GST with five tax slabs and a cap at 28% makes for an
              extremely complicated tax structure. An abundance of tax slabs
              makes corruption more likely and directly affects the functioning
              of MSMEs. We need a system whereby the state machinery is working
              in the best interest of the people, ensuring ease of doing
              business and improving the quality of life for every citizen.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
