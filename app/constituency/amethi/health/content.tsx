import React from "react";

import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGoogleFill,
} from "react-icons/ri";

import BreadCrumb from "./breadcrumb";
import Image from "next/image";

import { Montserrat, Inter, Roboto_Mono, Roboto_Flex } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });
const roboto_f = Roboto_Flex({ subsets: ["latin"] });

const banner = [
  "/constituency/amethi-healthcare/CommunityHealthCenter.png",
  "/constituency/amethi-healthcare/District-hospital.png",
  "/constituency/amethi-healthcare/1.png",
  "/constituency/amethi-healthcare/2.png",
  "/constituency/amethi-healthcare/3.png",
];

function content() {
  return (
    <div
      className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <div className="order-2 md:order-1 text-3xl">Healthcare</div>
          <div className="order-1 md:order-2 grid grid-cols-4 gap-2 text-xl">
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiFacebookFill />
            </div>
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiTwitterFill />
            </div>
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiLinkedinFill />
            </div>
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiGoogleFill />
            </div>
          </div>
        </div>

        {/* Bread crumb */}

        <div className="mt-5 bg-gray-100 ">
          <BreadCrumb />
        </div>

        {/* Project Details */}

        <div
          className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
        >
          <p>
            Equitable quality healthcare for all has been one of the focus areas
            for Rahul Gandhi in his constituency. Throughout his three term
            tenure, he has strived to ensure that every person has access to
            affordable healthcare and has taken several initiatives in this
            regard. The success of these initiatives is evident from the steady
            improvement in the state of health infrastructure and services in
            the district as well as in the increased access of the citizens to
            quality healthcare.
          </p>
          <br />
          <p className="text-2xl text-[#032b5b] underline">
            Primary & Secondary Healthcare
          </p>
          <br />
          <Image
            src={banner[0]}
            width={1920}
            height={717}
            alt="banner 1920 x 717"
            className="block h-auto max-w-full"
          />
          <p className="text-sm text-[#032b5b] italic ">
            Community health center in Amethi
          </p>
          <br />
          <p>
            Amethi district has a network of well equipped primary and community
            healthcare centres which function round the clock with multiple
            sub-centres under them. As of 2016-17, the district had 43 PHCs, 13
            CHCs and 271 sub- centres which implement all the government schemes
            and provide basic healthcare services to the people across the
            district, especially in the rural areas. As a result of effective
            functioning of these centres, health indicators in Amethi have
            continued to show impressive improvement.
          </p>
          <Image
            src={banner[1]}
            width={1920}
            height={717}
            alt="banner 1920 x 717"
            className="block h-auto max-w-full"
          />
          <p className="text-sm text-[#032b5b] italic ">
            District hospital under construction
          </p>
          <br />
          <p>
            A separate district hospital for Amethi is under construction which
            will have all the amenities including intensive and critical care
            for the patients. It will also serve to make secondary healthcare
            more accessible to the people.
          </p>
          <br />
          <p>
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
          </p>
          <br />
          <p>
            Watch the members of the SHG ‘Pooja Mahila’ explain the kind of
            health information provided to women of the community:
          </p>
          <video width="1920" height="717" controls preload="none">
            <source src="/path/to/video.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <br />  
          <p className="text-2xl text-[#032b5b] underline">
            Tertiary Healthcare
          </p>
          <br />
          <p>
            <ul>
            1. The Indira Gandhi Eye Hospital & Research Centre:
            </ul>
            <p>
            In 2005, Rahul Gandhi set up the Indira Gandhi Eye Hospital & Research Centre dedicated to providing advanced eye care facility for the people of Amethi. The hospital has 180 beds, caters to over 400 patients per day from across 12 districts in Uttar Pradesh and conducts around 100 surgeries daily. From its inception in 2005 till March 2014, IGEHRC hospital has treated 1.5 million out-patients and performed over 1,80,000 sight restoring surgeries. It is regarded as one of the best providers of quality eye care in the state now.
            </p>
          </p>
          <Image
            src={banner[2]}
            width={1920}
            height={717}
            alt="banner 1920 x 717"
            className="block h-auto max-w-full"
          />
          <p className="text-sm text-[#032b5b] italic ">
          Rahul Gandhi visiting the Indira Gandhi Eye Hospital & Research Centre
          </p>
          <br />
          <p>
            <ul>
            2. Eye Camps:
            </ul>
            <p>
            Mr Gandhi’s aim while starting this hospital in 2005 was to take eye care services to the villages of Amethi where the scope of access to specialised eye care until then was limited. In an attempt to eliminate preventable blindness and provide affordable quality eye care, monthly eye camps were initiated across Amethi where doctors visit the villages and provide free services to the people. As a part of these monthly camps, cataract operations are also carried out for these patients for only Rs 500. The hospital bears all costs and responsibilities of food, travel, subsequent check-ups and other expenses. Indira Gandhi Eye Hospital currently conducts around 100 operations per day for the patients from eye camps. This initiative has been a game changer in rural healthcare as majority of the population in Amethi now has access to affordable and quality eye care services.
            </p>
          </p>
          <Image
            src={banner[3]}
            width={1920}
            height={717}
            alt="banner 1920 x 717"
            className="block h-auto max-w-full"
          />
          <p className="text-sm text-[#032b5b] italic ">
          Rahul Gandhi visits the eye camp beneficiaries
          </p>
          <br />
          <p>
          Here is what beneficiaries of these camps have to say about the facilities and benefits of this initiative -
          </p>
          <br />
          <video width="1920" height="717" controls preload="none">
            <source src="/path/to/video.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <br />
          <p>
            <ul>
            3. Sanjay Gandhi Memorial Hospital:

            </ul>
         
          </p>
          <Image
            src={banner[4]}
            width={1920}
            height={717}
            alt="banner 1920 x 717"
            className="block h-auto max-w-full"
          />
          <p className="text-sm text-[#032b5b] italic ">
          Entry to Sanjay Gandhi Hospital
          </p>
          <br />
          <p>
          Amethi also has a multi speciality hospital, the Sanjay Gandhi Memorial Hospital, providing general healthcare services and treatments to the people of the district. It was set up in 1982 by Indira Gandhi and is Amethi’s first large scale healthcare service facility. It is a fully equipped modern hospital with specialists in medicine, surgery, women and child care, ortho, ENT departments coupled with modern labs, a blood bank, physiotherapy ward, along with ICU facility.
            </p>

        </div>
      </div>
    </div>
  );
}

export default content;
