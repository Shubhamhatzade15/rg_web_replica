import React from "react";

import Image from "next/image";

import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGoogleFill,
} from "react-icons/ri";

import BreadCrumb from "./breadcrumb";

import { Montserrat, Roboto_Flex } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });
const roboto_f = Roboto_Flex({ subsets: ["latin"] });

const image1 = "/shgss/shgss_meet.jpg";
const sorry = "/shgss/sorry.png";

const vid = "/shgss/vid_1.mp4";

function content() {
  return (
    <div
      className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <div className="order-2 md:order-1 text-3xl text-[#032B5B]">
            Self-Help Groups
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
          <BreadCrumb />
        </div>

        {/* About Amethi */}

        <div
          className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
        >
          <p>
            It is the vision of Congress President, Rahul Gandhi, to ensure that
            women have an equal place in our society. His focus has remained on
            ensuring their workforce participation increases and they receive
            greater representation in the political process. He has consistently
            advocated and worked towards the empowerment of women and has taken
            measures to ensure the same. One of his most significant steps was
            to initiate the system of Self-Help Groups amongst the women in the
            villages of Amethi. The primary focus of this scheme was to bring
            women together and empower them with information and decision making
            capabilities. Through Rajiv Gandhi Mahila Vikas Pariyojana (RGMVP),
            the women are imparted with skills in leadership, education,
            fundamental rights, health and self defence, all of which enables
            them to become far more independent and empowered. SHGs were
            envisioned to reach out to the last person in the line and to
            percolate down to the most interior areas. They are designed as a
            three tier structure, i.e, SHGs within a village with 10-20 women,
            village level consisting of around 10 SHGs and the block level which
            is a federation of the village level SHGs.
          </p>
        </div>

        {/* SHGss */}

        <div className="mt-5">
          <div className="w-full mt-3">
            <Image
              src={image1}
              alt="img"
              width={1000}
              height={500}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              Founder of Microsoft, Bill Gates, visits Amethi
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            n 2010, Rahul Gandhi brought Microsoft founder and philanthropist,
            Bill Gates, to the district of Amethi to shine a light on the
            growing development work in the region. The pair visited various
            schools, hospitals, the IGEHRC eye care camps and a group of SHGs to
            speak to women about their needs and development issues. This visit
            helped popularise the SHG scheme and highlight the incredible work
            these women do in villages around the district.
            <br />
            <br />
            SHGs mainly work in areas of financial stability and inclusion,
            livelihood promotion, health care and access to government schemes.
          </p>
        </div>

        {/* Roads */}

        <div className="mt-5">
          <div className="w-full mt-3">
            <Image
              src={sorry}
              alt="roads"
              width={4000}
              height={2248}
              className="block h-auto w-full"
            />
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            The success of SHGs can be gauged from the extent of their
            proliferation in the villages of Amethi. In 2015-16 alone, the
            programme covered 16 blocks with 699 out of 701 gram panchayats
            included within RGMVP. Till March 2016, there were 13,795 SHGs in
            Amethi reaching out to 1,48,135 families.
            <br />
            <br />
            Women across villages have reaped the benefits of the training and
            sensitisation that they received after being associated with the
            SHGs in their villages. They described the drastic improvement in
            their quality of life. through financial inclusion, access to
            government schemes and services, etc. Most importantly, their
            stories highlight the empowerment and independence that they have
            achieved after being associated with SHGs.
            <br />
            <br />
            Here are a few stories of women describing how being active members
            of SHGs has changed their lives for the better -
          </p>
        </div>

        {/* Images */}

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full">
            <Image
              src={sorry}
              alt="Animal Breeding Centre in Amethi"
              width={4000}
              height={2248}
              className="block h-full w-full"
            />
          </div>
          <div className="hidden md:block w-full relative">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/300034010?h=e6cea87467"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="visible md:hidden w-full">
            <video className="h-full w-full" controls>
              <source src={vid} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Others */}
      </div>
    </div>
  );
}

export default content;
