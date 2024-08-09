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
              Dalit Rights
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
            <Breadcrumb pageName="Dalit Rights" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              70 years ago India took several steps to transform itself from a
              colonised state to a free and independent nation. This
              transformation required every citizen to take great risk in some
              manner or the other. Today, 72 years after Independence we are
              reaping the benefits of the hard work and sacrifice. It is my
              belief and the belief of the Congress party that since every
              Indian shared the risk, they must also share the reward. It is the
              right of every Indian to have equal access, opportunity and
              freedom - no matter creed, caste or tribe. What makes India unique
              and what makes it strong is the wonderful diversity of our people
              and our cultures. We need to protect this diversity and ensure it
              continues to shine.
              <br />
              <br />
              In order to achieve this, we need to ensure the protection of
              every citizen. The Adivasi&apos;s of our country have the right to
              live freely, without fear of harm, of eviction, of displacement
              with no notice at the whims and fancies of a chosen few. The
              governmen&apos;s role is to protect these rights and to ease their
              way to achieving more for their families and communities.
              <br />
              <br />
              It is the responsibility of the government machinery to provide
              proper and specialised representation to the Adivasis. We believe
              in the need to set up a targeted tribal affairs department -
              besides the Scheduled Caste department - that will have the sole
              purpose of protecting Adivasi interests. Through such a department
              we need to implement methods to protect their land and ensure it
              is not misused by other interested stakeholders. In cases where
              obtaining forest land is necessary for mining, we must create a
              mechanism that makes Adivasis shareholders in development.
              <br />
              <br />
              I am of the view that we have much to learn from these
              communities. The Adivasis of our nation understand one of our
              greatest natural resources — our forests — much better than others
              would. They have lived in and learned from our forests a lesson
              that the rest of the world has just started to realise — how to
              live harmoniously with nature. These communities need resources to
              sustain and grow themselves, not to be ill-treated and talked down
              to.
              <br />
              <br />
              We strongly believe it is imperative to ensure the Forest Right
              Act is implemented to the letter of the law. The Act grants legal
              recognition to traditional forest dwelling communities, correcting
              the injustice caused by previous forest laws. It gives these
              communities a voice in forest and wildlife conservation and
              clearly designates what constitutes a forest dwelling Scheduled
              Tribe. This is vital for distributing land and land rights. Under
              the law even if the tribe doesn&apos;t have the proper paperwork
              to prove the land belongs to them, they can have access to 4
              hectares of land so long as they cultivating it on their own. The
              land cannot be sold or transferred to anyone except through
              inheritance. Most importantly, the law gives the right to protect
              and conserve forest land to the community. This is vital for
              thousands of village communities who are protecting the forest and
              wildlife against threats from forest mafias, industries and land
              grabbers.
              <br />
              <br />
              In honour of our Constitution, we believe it is imperative that
              all individuals are treated equally. We must empower
              Adivasi&apos;s — especially Adivasi youth — by promoting
              developmental schemes, skill building workshops, and access to
              platforms that promote knowledge sharing. We must ensure they are
              given the same opportunities and access as the majority of Indians
              get.
              <br />
              <br />
              Every citizen of this nation has the right to live freely and
              fully in the journey to achieving their dreams. We are not a
              nation that can claim to be fully free until every citizen is
              empowered — not just a few, not almost everyone, but every single
              one. This especially holds true for the most marginalised in our
              country. If we are unable to protect and empower our most
              vulnerable people, can we truly claim to be a just and equitable
              society that gives everyone a chance to succeed?
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
