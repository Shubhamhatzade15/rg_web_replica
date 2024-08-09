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
              Agriculture
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
            <Breadcrumb pageName="Agriculture" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              “Everything can wait, but not agriculture,” said Pandit Nehru many
              decades ago, but the same holds true even today. Agriculture is
              the building block of our economy, and farmers are the foundation.
              Under no circumstance can we take them for granted or ignore their
              plight. Due to the current state of the economy and political
              structure, farmer suicides have reached staggering rates,
              primarily due to mounting indebtedness, non-remunerative prices
              for their crops, increasing cost of production, and declining
              agriculture credit. The Congress party and I strongly believe in
              the importance of setting up state machinery that works to benefit
              farmers and their families.
              <br />
              <br />
              Our primary focus must remain on helping Indian farmers escape the
              shackles of mounting debt, we have to focus our efforts on finding
              innovative and sustainable measures to remove this burden. In
              order to help everyone, we will initiate a loan waiver scheme for
              small and marginal farmers, on the same lines as the farm loan
              waiver programme devised by the UPA government in 2009, which
              benefitted over 3.2 crore farmers. In addition, it is imperative
              for farmers to receive state support on the price of their
              produce. We need to relook at the current MSP, and incorporate the
              formula suggested by the Swaminathan Committee. We must take into
              consideration the value of owned capital assets, rent paid for
              leased-in land, and the rental of owned land. Without the proper
              MSP calculation, we are doing our farmers a disservice and will
              never be able to provide them the support they need.
              <br />
              <br />
              In order to help farmers grow, we need to create the right
              opportunities, that will benefit them in the most substantial
              manner. We must provide interest free loans to cover input costs
              to tenant farmers, share-croppers, and farmers that own and
              cultivate up to two hectares of land. This will ensure they are
              provided the platform they need to improve yield, without the
              worry of finances. In addition, we need a farmer centric paradigm
              shift in Indian agriculture that will restore profitability,
              taking a humanitarian and compassionate approach to enhance
              farmers&apos; incomes, ensuring dignity to farmers, good education
              to their children, healthcare to their families and financial and
              social security through pensions to farmers and farm workers. The
              Kisan and Krishi Majdoor Welfare Aayog, will oversee welfare for
              farmers and farm workers, guaranteeing them social security
              through a pension fund.
              <br />
              <br />
              In every sector of our economy, including agriculture, we need to
              consider innovative, scientific and modern methods to achieve
              better results. The Congress party has always been of the belief
              that every Indian must benefit from modern technology and
              scientific discovery. For agriculture we will extend support to
              start-ups and businesses in the farming sector to assist farmers
              with marketing, new technology, distribution, etc. We will explore
              setting up Special Agricultural Zones which would focus on raising
              high value crops for the domestic and export markets. This will
              lead to branding of products, economies of scale and attract
              investments, benefiting farmers irrespective of their background.
              We will focus on creating skill centres for farmers at the block
              level - much like former Congress CM, Siddaramaiah did in
              Karnataka - to ensure farmers have access to the latest technology
              and networks. We will also emphasise imparting basic skills in
              agriculture and animal husbandry at class VIII level so that
              students can understand the significance of agriculture.
              <br />
              <br />
              In a country where 56% of the working population belongs to the
              agriculture and allied sectors, it is imperative that we frame our
              policies to benefit those people. 60 years ago, India became a
              food surplus nation through modern technology adopted in the Green
              Revolution; today we must strive to create a radical change
              similar to early 1960s and completely transform the lives of
              farmers and their families.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
