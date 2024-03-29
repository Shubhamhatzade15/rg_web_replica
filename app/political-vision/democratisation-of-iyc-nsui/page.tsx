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

const hero_banner = "/issues-images/democratisation-of-IYC-NSUI2.jpg";

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
              Democratisation of IYC/NSUI
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
            <Breadcrumb pageName="Democratisation of IYC/NSUI" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              The Congress party has a legacy of legends, great leaders & great
              minds that worked tirelessly & passionately towards the freedom &
              development of India. It is this legacy that invigorates thousands
              of young people to join politics, even today. It is with this in
              mind that the idea of democratising the Indian Youth Congress &
              National Students Union of India first came to be.
              <br />
              <br />
              Driven by the belief and notion that politics in India should be
              an open platform, for people from all walks of life, the move to
              democratise IYC & NSUI began. The notion was that these are the
              future leaders of India and therefore the system must promote
              their talents & help them evolve into better leaders. It further
              evolved into an innovative model of taking democracy to the grass
              roots, especially in student and youth politics. The first NSUI
              election took place in Uttarakhand in 2011 and closely followed
              the US primary election style. Nominations were filed, elections
              were conducted and a president was chosen and thus began the
              future of student politics in India.
              <br />
              <br />
              WToday NSUI is the only student body in the country that
              facilitates open & fair elections for the highly sought after
              position of President & Vice President. The entire system has
              changed and it was all born out of a need to make politics fairer
              for the average Indian. Prior to this change, NSUI & IYC officials
              were appointed, which inevitably resulted in excessive nepotism &
              the persistence of dynastic politics. Democratising the system
              allows for the common man to participate in the political world.
              It puts everyone on a level playing field thus ensuring that the
              most deserving candidate gets the position as opposed to the most
              connected.
              <br />
              <br />
              In the country & within the party there was a need for fresh
              though and perspective. there was a vacuum that needed to be
              filled. Our country is home to such incredible talent, from all
              corners of its great lands, this talent needs to be tapped into
              and used for the benefit of all Indians. Thousands of young people
              who have a passion for political participation are often left on
              the outside - this is what made democratising the NSUI & IYC such
              a monumentally important task. It was imperative to open the doors
              to everyone.
              <br />
              <br />
              Interestingly, what has come out of this practice over the last
              few years is leaders with a unique affinity & respect for the
              democratic process - both at a smaller scale, like student
              elections & panchayati raj & a larger scale, like national
              elections. These leaders are trained to think & act in a
              democratic manner. They are inculcated with a desire to work
              tirelessly for the people that got them elected, because
              ultimately it is the people that hold the most power.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
