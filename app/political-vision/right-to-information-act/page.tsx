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
              Right to Information Act
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
            <Breadcrumb pageName="Right to Information Act" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              India&apos;s greatest asset has always been its people. From our
              brilliant scientists who are taking this nation to new frontiers
              in the universe to the farmers and workers who keep this nation
              running with their ceaseless toil, our people are our greatest
              assets. We are on the brink of a new age of success and it is our
              quintessentially Indian work ethic, our special talent for
              handling adversities, and our ability to come together for a
              united purpose that will make us achieve greatness.
              <br />
              <br />
              It is these people that our party and I work for. Since its
              inception, the Indian National Congress&apos; goal has been to
              ease the path of Indians seeking to achieve their potential by
              removing roadblocks and creating opportunities. It is this
              single-minded drive that pushed us to enact the Right to
              Information (RTI) Act in the year 2005, that would empower the
              citizens of our country.
              <br />
              <br />
              In this increasingly globalised world, the maxim “Information is
              power” has never been truer. Our goal with the Right to
              Information Act was to transfer power back to its natural bearers
              — the citizens of our country. Information that had been secreted
              away in government offices, lost amongst files, or just been
              forgotten is now freely available to any Indian who asks for it.
              In the hands of the common man, this is a tool that is used to
              ensure that the system does not become a machine they are merely a
              cog in. It is a tool by which they stand for what is right. It is
              a tool that powers everyone&apos;s progress by keeping everyone
              accountable to their constituents and fellow citizens.
              <br />
              <br />
              This revolutionary law was not borne out of fear. The Indian
              National Congress was proactive in pushing through the Right to
              Information Act because of the principles we have been founded on
              and continue to uphold. Despite detractors who feared exposure and
              misuse, we championed this Act because it represented an
              inalienable right that people held, and they just needed a channel
              to exercise it. We did this despite knowing the scrutiny it would
              put our own government and its allies under because, very simply,
              it was the right thing to do.
              <br />
              <br />
              The citizens we were aiming to serve did not disappoint us. The
              Act has been used to protect the rights of vulnerable groups, to
              do a deep dive into government office functioning and funding. But
              no information is frivolous since it empowers the common people to
              hold their public servants accountable. It gives them the right to
              question the government. The Congress, like the nation it serves,
              has always been by the people, for the people, and of the people.
              The Right to Information Act was just one more example which
              proves that.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
