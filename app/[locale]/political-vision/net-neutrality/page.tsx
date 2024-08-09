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
              Net Neutrality
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
            <Breadcrumb pageName="Net Neutrality" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              Tim Berners-Lee, the man who invented the world wide web, could
              have been a very rich man today. Instead, he works as a professor
              at the University of Oxford and champions open data initiatives
              worldwide. Why would this man choose to give away a piece of work
              that he slaved over for years, for free? It is because he believed
              the internet, and the information it empowered us with, was for
              everyone.
              <br />
              <br />
              The internet was created with democratic intent for a reason -
              because the information it gives us helps Davids take on Goliaths.
              No man or woman is too weak, poor, unresourced, or incapable with
              the right information in their hands. It is using this platform
              that justice can be brought even to the weakest sections of our
              society.
              <br />
              <br />
              For the Congress & myself, net neutrality is a must, we believe
              all Internet Service Providers, Telecom Service Providers & the
              government should treat all data on the internet equally. People
              should be free to visit any website they want thereby enabling a
              level playing field. It is imperative that schemes like Digital
              India do not become a euphemism for an internet controlled by
              large remote corporations. It is important that we recognise the
              danger in privileging a private platform over a public internet -
              this would inevitably lead to a digital divide.
              <br />
              <br />
              We do not believe in controlling the information people consume,
              nor do we believe in censoring their debate or dialogue. The
              internet is platform of equality, it was created as space where
              all individuals have equal access to all parts of it - hence net
              neutrality should be a prerequisite, not a luxury. An open
              internet enables equitable access for everyone, it prevents unfair
              & discriminatory pricing practices, it promotes innovations & most
              importantly it ensures the protection of freedom of speech. Net
              neutrality is imperative for India to grow in the 21st century.
              Information is power and this power belongs in the hands of all
              citizens.
              <br />
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
