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

const sorry = "/sorry.png";
const img1 = "/healthcare/PHC.jpg";
const img2 = "/healthcare/New_Hospital.jpg";
const img3 = "/healthcare/RG_Amethi_0901.jpg";
const img4 = "/healthcare/RG_Amethi_090+2.jpg";
const img5 = "/healthcare/SGH-Inside.jpg";

function content() {
  return (
    <div
      className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <div className="order-2 md:order-1 text-3xl text-[#032B5B]">
            Healthcare
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

        {/* About Amethi Health */}

        <div
          className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
        >
          <p>
            Equitable quality healthcare for all has been one of the{" "}
            <span className="text-[#337ab7] hover:underline hover:text-[#032B5B] hover:italic">
              <a href="/constituency/amethi">focus areas for Rahul Gandhi</a>
            </span>{" "}
            in his constituency. Throughout his three term tenure, he has
            strived to ensure that every person has access to affordable
            healthcare and has taken several initiatives in this regard. The
            success of these initiatives is evident from the steady improvement
            in the state of health infrastructure and services in the district
            as well as in the increased access of the citizens to quality
            healthcare.
          </p>
        </div>

        {/* SHGss */}

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
            Primary & Secondary Healthcare
          </p>
          <div className="w-full mt-3">
            <Image
              src={img1}
              alt="img"
              width={1600}
              height={800}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              Community Health Centre in Amethi
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            Amethi district has a network of well equipped primary and community
            healthcare centres which function round the clock with multiple
            sub-centres under them. As of 2016-17, the district had 43 PHCs, 13
            CHCs and 271 sub- centres which implement all the government schemes
            and provide basic healthcare services to the people across the
            district, especially in the rural areas. As a result of effective
            functioning of these centres, health indicators in Amethi have
            continued to show impressive improvement.
          </p>

          <div className="w-full mt-3">
            <Image
              src={img2}
              alt="img"
              width={1600}
              height={800}
              className="block h-auto w-full"
            />
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              District hospital under construction
            </p>
          </div>
          <p
            className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            A separate district hospital for Amethi is under construction which
            will have all the amenities including intensive and critical care
            for the patients. It will also serve to make secondary healthcare
            more accessible to the people.
            <br />
            <br />
            In Amethi, expanding access to social welfare schemes through
            community participation and Self-Help groups has been a true
            success. This has ensured that primary and community healthcare
            services reach every village in the district. Much like the other
            welfare initiatives, healthcare is designed as a bottom-up structure
            to ensure that the process is inclusive and serves the last person
            in the line. The district has a system of community healthcare
            service with service providers and professionals addressing a wide
            range of issues to facilitate access to formal healthcare
            institutions. Women leaders in SHGs also actively conduct meetings
            in villages to disseminate information on crucial healthcare topics
            such as maternal and infant mortality, nutrition and sanitation. The
            success of these programmes is evident in the growing awareness and
            steady improvement in the health indicators. Sex ratio in Amethi is
            983 which is higher than the national and state average.
            <br />
            <br />
            Watch the members of the SHG &#x2018;Pooja Mahila&#x2019; explain
            the kind of health information provided to women of the community:
          </p>
          <div className="w-full mt-3">
            <Image
              src={sorry}
              alt="roads"
              width={4000}
              height={2248}
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* Tertiary care */}

        <div className="mt-5">
          <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
            Tertiary Healthcare
          </p>

          <div>
            <p className={`font-bold mt-5 ${roboto_f.className}`}>
              1. The Indira Gandhi Eye Hospital & Research Centre:
            </p>
            <p
              className={`mt-3 text-justify text-sm md:text-base ${roboto_f.className}`}
            >
              In 2005,{" "}
              <span className="text-[#337ab7] hover:underline hover:text-[#032B5B] hover:italic">
                <a href="/">Rahul Gandhi</a>
              </span>{" "}
              set up the Indira Gandhi Eye Hospital & Research Centre dedicated
              to providing advanced eye care facility for the people of Amethi.
              The hospital has 180 beds, caters to over 400 patients per day
              from across 12 districts in Uttar Pradesh and conducts around 100
              surgeries daily. From its inception in 2005 till March 2014,
              IGEHRC hospital has treated 1.5 million out-patients and performed
              over 1,80,000 sight restoring surgeries. It is regarded as one of
              the best providers of quality eye care in the state now.
            </p>
            <div className="w-full mt-3">
              <Image
                src={img3}
                alt="roads"
                width={1405}
                height={774}
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div>
            <p className={`font-bold mt-5 ${roboto_f.className}`}>
              2. Eye Camps:
            </p>
            <p
              className={`mt-3 text-justify text-sm md:text-base ${roboto_f.className}`}
            >
              Mr Gandhi&apos;s aim while starting this hospital in 2005 was to
              take eye care services to the villages of Amethi where the scope
              of access to specialised eye care until then was limited. In an
              attempt to eliminate preventable blindness and provide affordable
              quality eye care, monthly eye camps were initiated across Amethi
              where doctors visit the villages and provide free services to the
              people. As a part of these monthly camps, cataract operations are
              also carried out for these patients for only Rs 500. The hospital
              bears all costs and responsibilities of food, travel, subsequent
              check-ups and other expenses. Indira Gandhi Eye Hospital currently
              conducts around 100 operations per day for the patients from eye
              camps. This initiative has been a game changer in rural healthcare
              as majority of the population in Amethi now has access to
              affordable and quality eye care services.
            </p>
            <div className="w-full mt-3">
              <Image
                src={img4}
                alt="roads"
                width={1600}
                height={1065}
                className="block h-auto w-full"
              />
            </div>
            <p className=" text-xs md:text-sm italic text-[#032B5B]">
              Rahul Gandhi visits the eye camp beneficiaries
            </p>

            <p
              className={`mt-3 text-justify text-sm md:text-base ${roboto_f.className}`}
            >
              Here is what beneficiaries of these camps have to say about the
              facilities and benefits of this initiative -
            </p>
            <div className="w-full mt-3">
              <Image
                src={sorry}
                alt="sorry"
                width={4000}
                height={2248}
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div>
            <p className={`font-bold mt-5 ${roboto_f.className}`}>
              3. Sanjay Gandhi Memorial Hospital:
            </p>
            <div className="w-full mt-3">
              <Image
                src={img5}
                alt="sgh"
                width={1405}
                height={774}
                className="block h-auto w-full"
              />
              <p className=" text-xs md:text-sm italic text-[#032B5B]">
                Entry to Sanjay Gandhi Hospital
              </p>
            </div>

            <p
              className={`mt-3 text-justify text-sm md:text-base ${roboto_f.className}`}
            >
              Amethi also has a multi speciality hospital, the Sanjay Gandhi
              Memorial Hospital, providing general healthcare services and
              treatments to the people of the district. It was set up in 1982 by
              Indira Gandhi and is Amethi&apos;s first large scale healthcare
              service facility. It is a fully equipped modern hospital with
              specialists in medicine, surgery, women and child care, ortho, ENT
              departments coupled with modern labs, a blood bank, physiotherapy
              ward, along with ICU facility.
            </p>
          </div>
        </div>

        {/* Others */}
      </div>
    </div>
  );
}

export default content;
