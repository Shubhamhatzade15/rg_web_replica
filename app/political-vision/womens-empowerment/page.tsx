import React from "react";

import Hero from "../Hero";
import Breadcrumb from "../BreadCrumb";

import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGoogleFill,
} from "react-icons/ri";

import { Montserrat, Roboto_Flex } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });
const roboto_f = Roboto_Flex({ subsets: ["latin"] });

const hero_banner = "/issues-images/women-empowerment-banner2.jpg";

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
              Women Empowerment
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
            <Breadcrumb pageName="Women Empowerment" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              Women hold up half of this nation, and have an equal claim to
              decision-making.
              <br />
              <br />
              Today, we have inspiring role models in every field - from ISRO
              scientists to athletes. But we need to do so much more to end the
              bias that sets in right at birth, and deprives women of their
              share in nutrition, healthcare, education, employment, resources
              and life-chances. The Congress party and I are determined to do
              everything we can to make this possible.
              <br />
              <br />
              Statistics about violence against women are often bandied about,
              but we need to work on the solutions, with urgency. We must care
              about women&apos;s safety and security, and we must care about
              their freedom. They are citizens who must have an economic,
              political and social voice - as guaranteed by the Constitution of
              India.
              <br />
              <br />
              It was a Congress government that introduced gender budgeting, and
              our policies like MNREGA have kept women in mind at every step -
              be it equal wages, involvement in audits, and direct payment into
              bank accounts. Every action that helps women is our cause, like
              our recent successful campaign to end GST on sanitary pads.
              <br />
              <br />
              Indian women, whatever their other social identities, deserve
              equal rights in inheritance, marriage, separation, spousal support
              and so on. We are committed to this cause. Along with economic
              empowerment, it is pertinent that our country demands equal
              political representation of women. While panchayats in many states
              have 50 percent reservation for women, they are still shamefully
              under-represented in state assemblies and Parliament. Only 11
              percent of seats are occupied by women currently, and this must
              change. The Congress championed the women&apos;s reservation bill
              in Parliament, and passed it in the Rajya Sabha, but,
              unfortunately, it lapsed. We offer our wholehearted support to its
              passage. We need women to frame policy, to strengthen party
              organisations, and to lead us to a fairer future.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
