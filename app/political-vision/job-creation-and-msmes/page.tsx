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

const hero_banner = "/issues-images/Job-Creation-and-MSMEs-banner.jpg";

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
              Jobs & MSME
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
            <Breadcrumb pageName="Jobs & MSME" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              Every year 12 million young people enter our job market searching
              for a livelihood. A majority of these young individuals have a
              high school education or less and are desperately seeking a
              mechanism to transform their lives. It is the responsibility of
              the government to organise the state machinery in a manner that
              will best suit the needs of these Indians.
              <br />
              <br />
              In terms of an economic vision that would invigorate job creation
              in India, the prudent decision would be to adopt the same measures
              as former Prime Minister, Dr. Manmohan Singh, but mould them to
              suit the current economic atmosphere. The Congress party has
              predominantly been adaptable towards the requirements of the time.
              Our policies have always been and will continue to be responsive
              to the needs of the people. The current and most prominent need is
              job creation and establishing the right political and financial
              infrastructure to help build our small and medium enterprises into
              global power houses.
              <br />
              <br />
              We need to create a balanced labour policy to promote growth and
              productivity while simultaneously providing security, remunerative
              wages and a quick justice system for the labour. Thereby
              protecting contract labour from exploitation and ensuring strict
              implementation of “equal work - equal pay” provisions. Our focus
              has always been to protect the weaker sections of society and
              ensure their upliftment, a unified labour policy will not only
              protect our citizens but ensure a stronger and more prosperous
              economy. However, in order for our economy to grow, creating new
              jobs is the need of the hour. We need to create sector specific
              jobs to encourage growth in both urban and rural areas. It is
              imperative we take all the necessary steps for job expansion in
              the organised and unorganised sector by boosting domestic
              consumption, putting exports on a high growth trajectory, and
              focusing on Micro, Small and Medium Enterprises (MSMEs) as our
              mechanisms of growth.
              <br />
              <br />
              The current state of the political and economic structure
              predominantly favours large corporations, they&apso;re
              monopolising the banking system, while MSMEs struggle to get minor
              bank loans. Since MSMEs constitute a large chunk of our economy
              our focus needs to aggressively change towards prioritising ease
              of doing business for them, and as a result create new jobs.
              Unlike China, our democratic system does not allow us to create
              large fear ridden factories, hence our focus needs to be on
              helping smaller businesses achieve global excellence. India&apos;s
              real innovative strength lies with millions of small firms and
              young entrepreneurs; therefore, it is imperative we carve out a
              space for MSMEs to prosper in our economy. We need to bring in
              experts from around the globe to help us turn these small and
              medium companies into multinational companies.
              <br />
              <br />
              The conversation in India, when it comes to the economy is always
              about growth, and while growth is important it fast becomes
              meaningless if it doesn&apos;t also create jobs. In order for our
              economy to flourish and our people to flourish, our focus needs to
              dramatically change towards creating millions of new jobs, to
              empowering the labour, and to providing a conducive environment
              for MSMEs to grow.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
