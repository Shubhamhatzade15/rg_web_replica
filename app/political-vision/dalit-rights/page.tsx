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

const hero_banner = "/issues-images/dalit-empowerment.jpg";

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
            <Breadcrumb pageName="Dalit Rights" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              The caste system is not just a historical shame that divided
              Indians and trapped our potential, we are still struggling to get
              out of its dark shadow. Equality and social justice, were the
              promises of Dr. B. R. Ambedkar&apos;s Constitution, but even
              today, the persistence of caste blights many lives.
              <br />
              <br />
              Rohith Vemula, a Dalit PhD scholar in Hyderabad University, was
              driven to suicide, for speaking against a world, where "the value
              of a man was reduced to his immediate identity and nearest
              possibility - to a vote, to a number, to a thing. Never was a man
              treated as a mind." I can only quote Rohit Vemula&apos;s vision of
              a world where human beings can be truly valued "as glorious things
              made up of stardust, in every field, in studies, in streets, in
              life and in death".
              <br />
              <br />
              In a hierarchical context, achieving equality takes an extra
              effort. Right from universal adult suffrage, the Congress party
              has aimed to establish the equal worth of every individual, and to
              combat social discrimination. Land distribution, expanding access
              to education and employment through reservations, boosting and
              supporting Dalit voices in politics, are a part of this effort.
              <br />
              <br />
              Caste is a denial of equal opportunity, and we have tried to widen
              possibilities for Dalits at every chance we get. Dalits still face
              higher barriers at every level of education; they often lack the
              strong networks needed for entrepreneurship. To take one example
              of our efforts to correct this, it was a Congress government that
              mandated a part of government procurement from Dalit businesses,
              in small and medium enterprises.
              <br />
              <br />
              Achieving one&apos;s potential is possible only when one is free
              from threat and discrimination. It was Congress leadership that
              announced the Prevention of Atrocities Act to combat caste-based
              crimes, and it was a Congress government that reserved seats for
              SC/ST citizens in panchayats and as panchayat heads. Making these
              rights real, and defending them from the socially powerful, is an
              ongoing effort. Dalit women, in particular, face a double
              challenge. But this struggle is one that I am wholly committed to,
              as is the Congress party.
              <br />
              <br />
              We will raise our voices at any attempt to constrict Dalit dignity
              and power, whether on a campus, a workplace, or in the streets.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
