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

const Agri1 = "/amethi-agri/Agriculture1.jpg";
const Agri2 = "/amethi-agri/Agriculture2.jpg";
const Agri3 = "/amethi-agri/Agriculture3.jpg";
const sorry = "/amethi-agri/sorry.png";

const con1 = "/connectivity/connectivity.jpg";
const con2 = "/connectivity/road.jpg";
const con3 = "/connectivity/rail.jpg";

function content() {
  return (
    <div
      className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <div className="order-2 md:order-1 text-3xl text-[#032B5B]">
            Education
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
            Education has been one of the core areas of focus for Rahul Gandhi.
            His ardent belief in universal education has constantly motivated
            him to transform Amethi into an education hub. His initiatives and
            endeavour to provide accessible quality education, especially higher
            education for the people of his constituency have considerably
            changed the face of education in Amethi.
          </p>
        </div>
        <div
          className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
        >
          <p>
            The Congress President, in his three term tenure, has established
            five institutes of higher education which have now become centres of
            excellence, attracting students from across the country. The
            district also has a chain of government run primary schools which
            implement schemes related to universal education for children
            through Right to Education and Mid Day Meals. A few decades ago,
            Amethi lacked even the basic public infrastructure for education of
            its students. Today, the progress is visible in the increasing
            number of educational institutes and better human development
            indicators in the district. There are 1716 primary schools and 437
            secondary schools which cater to the students of Amethi and five
            institutes of higher education which attract students from across
            the country. This development has also encouraged considerable
            private investment in the field of education. There are almost 40
            private degree colleges providing higher education to the students
            of Amethi. Due to the continuous endeavours of Rahul Gandhi, today
            the literacy rate of Amethi is 69.72% which is at par with the rest
            of UP.
          </p>
        </div>

        {/* Connectivity-1 */}

        <div className="mt-5">
          <div className="w-full mt-3">
            <Image
              src={"/constituency/amethi/education_Image_1.png"}
              alt="con1"
              width={1000}
              height={500}
              className="block h-auto w-full"
            />
            <small className="italic">
              Rahul Gandhi interacts with the students of Government Junior High
              School at Tikari Dadu
            </small>
          </div>
        </div>

        <div>
          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
              Primary and Secondary Education
            </p>
            <p className="mt-5">
              Over the past decade, government-run primary schools in Amethi
              have improved in terms of infrastructure and facilities and basic
              education has become more accessible to the students of the
              district. The number of primary schools has gone up from 900 in
              1990 to 1716 in 2017. There are also 437 secondary schools as of
              2017.
            </p>
          </div>

          <div className="mt-5">
            <div className="w-full mt-3">
              <p className="text-xl">Sainik School</p>
              <Image
                src={"/constituency/amethi/Sainik_School.jpg"}
                alt="roads"
                width={1351}
                height={1600}
                className="block h-auto w-full"
              />
            </div>
            <p
              className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
            >
              Apart from the government primary schools, a Sainik school is also
              under construction for the students of Amethi. Sainik schools were
              conceived to prepare students for entry into the National Defence
              Academy (NDA) and Indian Naval Academy. Since students from this
              school are offered direct admission to the NDA and Naval Academy,
              a Sainik school enables the youth of Amethi to enter the Armed
              Forces.
            </p>
          </div>
        </div>

        <div>
          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p className="underline uppercase font-medium text-2xl text-[#032B5B]">
              Higher Education
            </p>
            <div>
              <p className="text-xl text-[#032B5B] mt-5">
                1. Indira Gandhi School & College of Nursing
              </p>

              <div className="w-full mt-3">
                <Image
                  src={"/constituency/amethi/Nursing_Home.png"}
                  alt="roads"
                  width={1351}
                  height={1600}
                  className="block h-auto w-full"
                />
                <small className="italic">
                  Nurses at Indira Gandhi School & College of Nursing
                </small>
              </div>
              <p
                className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
              >
                Indira Gandhi School & College of Nursing was established in
                2007 by Rahul Gandhi within the campus of Sanjay Gandhi Hospital
                at Munshiganj. The college provides students in Amethi the
                opportunity to receive training in nursing and has opened up
                several avenues for employment. It is equipped with world class
                facilities like digital library, laboratories, conference hall
                and a hostel. The graduates from the Nursing School receive
                clinical training for paramedical sciences and have been
                absorbed by reputed hospitals all over India.
              </p>
            </div>
            <div>
              <p className="text-xl text-[#032B5B] mt-5">
                2. Footwear Design and Development Institute
              </p>

              <div className="w-full mt-3">
                <Image
                  src={"/constituency/amethi/FDDI.jpg"}
                  alt="roads"
                  width={1351}
                  height={1600}
                  className="block h-auto w-full"
                />
                <small className="italic">
                  FDDI Training and Operative Centre
                </small>
              </div>
              <p
                className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
              >
                The FDDI also has a training and operative centre which provides
                free training in basic stitching and cutting. It is equipped
                with a workshop for cutting, closing, components, lasting and
                finishing and labs with state of the art machines. It was set up
                as a part of a scheme initiated by then Prime Minister Manmohan
                Singh to promote vocational training and boost employment.
                Through this scheme, the youth of Amethi are now able to afford
                specialised training and are given access to skills which boost
                their overall employability. The workshop guarantees almost 100%
                placement for its students apart from awarding them Rs 1500
                during the course of their training under the scheme.
              </p>
            </div>
            <div>
              <p className="text-xl text-[#032B5B] mt-5">
                3. Rajiv Gandhi Institute of Petroleum Technology
              </p>

              <div className="w-full mt-3">
                <Image
                  src={"/constituency/amethi/RGIPT.jpg"}
                  alt="roads"
                  width={1351}
                  height={1600}
                  className="block h-auto w-full"
                />
                <small className="italic">Campus of RGIPT</small>
              </div>
              <p
                className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
              >
                RGIPT was one of the institutes established in Amethi in 2008
                during the first tenure of Rahul Gandhi with a Rs. 450 crore
                investment. It was envisaged to serve as the fountainhead for
                nurturing world class technical human resource capable of
                serving as innovators of tomorrow in the field of Petroleum
                Technology. The institution provides the students with technical
                and management training via their BTech, MTech and MBA courses
                and has been accorded the eminence of being an &quot;Institute
                of National Importance&quot;.
              </p>
            </div>
            <div>
              <p className="text-xl text-[#032B5B] mt-5">
                4. Rajiv Gandhi National Aviation University
              </p>

              <div className="w-full mt-3">
                <Image
                  src={"/constituency/amethi/Flight-Training-School.jpg"}
                  alt="roads"
                  width={1351}
                  height={1600}
                  className="block h-auto w-full"
                />
                <small className="italic">Campus of RGNAU</small>
              </div>
              <p
                className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
              >
                RGNAU set up in 2013 by Rahul Gandhi, is India's first aviation
                university. It facilitates and promotes aviation studies,
                teaching, training and research. The university will offer a
                number of courses aimed at bridging the skill gap within the
                Indian Aviation industry by producing trained pilots as per the
                future requirements of the industry. It also aims to work in
                conjunction with the industry to achieve excellence in
                operations and management of all the sub-sectors within the
                aviation industry. The university has signed an MoU with GMR
                Aviation Academy to jointly organise an employability oriented
                programme in Aviation/ Airport Operations focused at providing
                trained manpower to the industry, enabling students across the
                country and especially from Amethi to enter into the aviation
                industry directly. While construction of the institute has been
                completed, it is still not functional due to the delay in
                sanctioning by the BJP government in the state and Centre.
              </p>
            </div>
            <div>
              <p className="text-xl text-[#032B5B] mt-5">
                5. Indira Gandhi Rashtriya Uran Akademi
              </p>

              <div className="w-full mt-3">
                <Image
                  src={
                    "/constituency/amethi/Indira_Gandhi_Rashtriya_Uran_Akademi.jpg"
                  }
                  alt="roads"
                  width={1351}
                  height={1600}
                  className="block h-auto w-full"
                />
                <small className="italic">Entrance to campus of IGRUA</small>
              </div>
              <p
                className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
              >
                IGRUA was established in 1985 by former Prime Minister and
                Amethi MP Rajiv Gandhi and is an autonomous body under the
                control of the Ministry of Civil Aviation. The Akademi has
                trained several aspiring pilots from across the country as well
                as foreign pilots from countries like Afghanistan, Mauritius,
                Zambia etc. Every year over 150 students undergo training at the
                academy. IGRUA also provides training to candidates of BSF,
                Coast Guard, Airforce and Navy.
              </p>
              <div className="w-full mt-3">
                <Image
                  src={"/constituency/amethi/Uran_3.jpg"}
                  alt="roads"
                  width={1351}
                  height={1600}
                  className="block h-auto w-full"
                />
                <small className="italic">Campus of IGRUA</small>
              </div>
              <div className="w-full mt-3">
                <Image
                  src={"/constituency/amethi/Uran.jpg"}
                  alt="roads"
                  width={1351}
                  height={1600}
                  className="block h-auto w-full"
                />
                <small className="italic">Runway of IGRUA</small>
              </div>
            </div>
            <div>
              <p className="text-xl text-[#032B5B] mt-5">
                6. CRPF Training Centre
              </p>

              <div className="w-full mt-3">
                <Image
                  src={"/constituency/amethi/Rahul_Gandhi_at_inauguration.jpg"}
                  alt="roads"
                  width={1351}
                  height={1600}
                  className="block h-auto w-full"
                />
                <small className="italic">
                  Rahul Gandhi at the inauguration of CRPF Training Centre
                </small>
              </div>
              <p
                className={`mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
              >
                The CRPF Training Centre was set up in 2013 with a Rs. 320 crore
                investment to provide training to paramilitary forces with
                modern facilities and training centres. The centre has the
                capacity to train nearly 1,000 fresh recruits who join the
                country's largest central security force as constables. The
                setting up of the training centre in Amethi, which is amongst
                the only eight CRPF training centres across the country, has
                encouraged more youth of Amethi to join the police force.
              </p>
            </div>
          </div>
        </div>

        {/* Roads */}

        {/* Other industries and employement opportunities */}
      </div>
    </div>
  );
}

export default content;
