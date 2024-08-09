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
              Decentralisation of Power
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
            <Breadcrumb pageName="Decentralisation of Power" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              Over the last 70 years India has seen a massive transformation. We
              were a rural country, locked in our villages, but we have
              transformed using democratic principles. 70 years ago in India you
              would have seen a rigid caste hierarchy, with no mobility, people
              couldn&apos;t aspire to do more, they were stuck. This is what
              India has been fighting and what we have been successful in
              beating - not entirely but in decent measure. China saw a similar
              transformation, however, while the ideas was the same, the
              methodology was vastly different. Our transformation was
              decentralised, anybody can do what they want, anybody can travel
              where they want, it&pos;s organic, it&apos;s even chaotic. The
              Chinese method is centralised, it comes from the Communist Party
              and it has seen much more violence in the early phase of its
              transformation.
              <br />
              <br />
              If we look at India&apos;s success over the last 70 years and
              before, you will find that we have been most prosperous when we
              decentralised power. It&apos;s all about dividing power equally
              and breaking monopolies. It&apos;s about giving power back to the
              people. We believe it is imperative to respect the intelligence of
              our citizens in our approach to their problems and take a
              bottom-up approach towards policy design.
              <br />
              <br />
              When it comes to policy decision we believe this should come from
              the grassroots level. The corridors of Delhi are quite often
              unaware of the realities on the ground and as a result the schemes
              that are decided at the centre have flaws which lead to
              dissatisfaction among people. It is the local people who
              understand their problems best, hence, they should be given as
              much power as possible to deal with these problems.plementing GST
              with an additional levy.
              <br />
              <br />
              By following this methodology, we have created policies that have
              been immensely successful. NREGA, one of the world&apos;s largest
              employment schemes, was born out of an observation made by a
              junior Congress member. He noticed the local tehsildar applying an
              NREGA-like scheme to successfully reinvigorate farmers and
              labourers into improving their circumstances through honest
              employment. The same has been true for RTI, food security and
              Right to Education. This is the kind of powerful impact that can
              be achieved by a government which does not seek to control its
              people, but rather aims to uplift and empower them.
              <br />
              <br />
              This mode of thinking does not merely apply to matters of social
              development programs or policy design. It is only effective when
              the same ideology is carried forward to how we view governance in
              the country. Decentralisation of power is key to a
              government&apos;s success in implementing programs. When a
              government operates at the periphery rather than occupying a
              starring role, it works more swiftly and effectively — to the
              benefit of its people.
              <br />
              <br />
              We believe this methodology is key to organising society as well.
              The RSS and the Congress have many differences, one of the key
              points is how we believe in creating order in society. The RSS
              vision is top to bottom hierarchy, where knowledge is centralised
              - hence power is centralised. The Congress&apos;s vision of
              organising India in a decentralised structure where knowledge is
              available to everybody, thus reducing hierarchy.
              <br />
              <br />
              Decentralisation of power is made possible when the thinking
              behind it begins at home. In the Indian National Congress, we are
              committed to ensuring that our party members are empowered to help
              their people, effect grassroots change, and champion for their
              beliefs equitably. This is reflected in the rise of members from
              even the district levels to key positions, where they are able to
              make an impact at a scale greater than ever before. These are not
              glamorous principles that are accompanied by catchy slogans.
              Rather, these are principles that are vital for effective
              governance.
            </p>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
