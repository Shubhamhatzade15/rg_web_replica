import React from "react";
import Image from "next/image";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGoogleFill,
} from "react-icons/ri";
import BreadCrumb from "./breadcrumb";

export default function AboutAmethi() {
  return (
    <section>
      <div>
        <Image
          src="/constituency/amethi/about_amethi_banner.png"
          width={1920}
          height={717}
          alt="banner 1920 x 717"
          className="block h-auto max-w-full"
        />
        <div
          className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8`}
        >
          <div className="px-4 md:px-10">
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
              <div className="order-2 md:order-1 text-3xl">About Amethi</div>
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

            <div className="mt-5 bg-gray-100 ">
              <BreadCrumb />
            </div>

            <video
              className="mt-10"
              width="1900"
              height="240"
              controls
              preload="none"
            >
              <source src="https://vimeo.com/300037010" type="video/mp4" />
              <track
                src="https://vimeo.com/300037010"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>

            <p className="mt-10">
              Amethi during the 1980s was very different from the Amethi of
              today. In the 1980s, it was considered to be amongst the most
              backward regions in the country. Upholding the pro development and
              inclusive spirit of the Congress Party, Rajiv Gandhi decided to
              focus his attention and work towards ameliorating the situation of
              the people of Amethi. This is why he chose to contest elections
              from Amethi and was elected as an MP for two terms from 1981. He
              continued to represent the constituency until his death in 1991.
              In a span of 10 years, Amethi witnessed drastic developments on
              all fronts- agriculture, law and order, health and education,
              industrialisation as well as connectivity. One of the most
              significant achievements was in the field of agriculture where
              wide expanses of infertile, alkaline land were transformed into
              lush green farms with good productivity.
            </p>

            <Image
              width={1900}
              height={496}
              src="/constituency/amethi/amethi_img1.png"
              alt="img"
            />

            <p className="mt-10">
              Over the next decade, Congress MPs from Amethi continued to
              advance the work done by Rajiv Gandhi and contributed towards its
              development. When Rahul Gandhi began his political career, he
              decided to continue to work for the people of Amethi and has been
              representing the constituency as an MP for three consecutive terms
              since 2004. In his vision for Amethi, he highlighted three main
              focus areas education, agriculture and connectivity. Rahul
              Gandhi’s attention to education is rooted in his firm belief that
              a good education is the foundation of development in any society.
              For the progress of any region and upward mobility of its people,
              education is a prerequisite. The Congress President’s focus has
              been to provide quality education to every student in his
              constituency by prioritising investments in a robust network of
              primary education and establishing world class institutes. He has
              transformed the face of education in Amethi, setting up five
              institutes of higher and specialised education.
            </p>

            <Image
              className="mt-10"
              width={1900}
              height={496}
              src="/constituency/amethi/amethi_img2.png"
              alt="img"
            />
            <p>
              Rahul Gandhi interacts with the women from SHG groups in Jais,
              Amethi
            </p>

            <p className="mt-10">
              Rahul Gandhi also identified connectivity as another focus area
              since it was crucial to make Amethi more accessible to and from
              other parts of the country. Apart from encouraging ease of
              movement, this would expand the scope of trade and employment and
              enable people to afford a better lifestyle. Over his three term
              tenure, Rahul Gandhi has used funds from MPLAD and other
              government schemes to construct an array of roads and highways
              connecting different parts of Uttar Pradesh and the rest of the
              country to Amethi. Better connectivity along with increasing
              industrialisation has also promoted many private enterprises to
              set up their production units in Amethi. For Rahul Gandhi,
              promotion and protection of farmers’ rights and their livelihood
              have always been of utmost importance. Following the footsteps of
              Rajiv Gandhi who revolutionised agriculture in Amethi, Rahul
              Gandhi also prioritised the welfare of farmers. He encouraged a
              model where agriculture and the traditional mode of livelihood can
              coexist with industrialisation. Since Amethi is an agri-based
              society, he strives to promote and protect their livelihood by
              introducing efficient and modern techniques of cultivation and
              better infrastructure.
            </p>

            <Image
              className="mt-10"
              width={695}
              height={496}
              src="/constituency/amethi/amethi_img3.png"
              alt="img"
            />

            <p>Rahul Gandhi interacts with the farmers of Amethi</p>

            <p className="mt-10">
              Due to Rahul Gandhi&apos;s unfaltering endeavours to provide world
              class health care facilities to the people, the health sector in
              Amethi has also witnessed substantial progress during his tenure.
              The Congress President has always believed in reaching out to the
              last person in the line and his initiatives have been focused
              around making health care more accessible. Free eye camps- a pet
              project of Rahul Gandhi- has made significant strides in making
              eye care accessible and now caters to around 100 patients every
              day. The benefits of health initiatives have also permeated to
              grassroots due to the Self Help Groups which are present across
              almost all the villages of Amethi. The concept of Self Help
              Groups, which was introduced in Amethi by Rahul Gandhi to empower
              women, has now become a robust self sustaining institution
              bringing into its fold hundreds of women who work together in
              areas of financial inclusion, health, education etc. Along with
              agriculture, industrialisation in Amethi has also thrived. Rahul
              Gandhi&apos;s vision for his constituency entails a mixed model of
              development wherein along with prospering agriculture, the youth
              are also provided with enough job opportunities. To this end, many
              heavy as well as small and medium sized industries have been set
              up like BHEL, SAIL, Rail Neer etc, opening up several avenues for
              employment and contributing towards the upward mobility of people
              in the district. In 15 years, Amethi has witnessed considerable
              growth in socio-economic and development indicators. However,
              since 2014, there has been clear signs of political sabotage by
              the BJP government in the centre and the state. Several projects
              set up by Rahul Gandhi have been stalled, cancelled or shifted
              outside Amethi. Such deliberate attempts at scoring political
              points have denied the people of Amethi the benefits of essential
              public infrastructure- a new railway line connecting
              Unchahar-Salon-Amethi has been stalled, the IIIT functioning for
              11 years has been closed down, the construction of 2 new Kendriya
              Vidyalayas, which would&apos;ve churned out five batches of students by
              now, is being delayed for over 5 years, Mega Food Park in
              Jagdishpur has been cancelled and the Hindustan Paper Mills which
              promised to provide job opportunities for more than 200 people has
              been shifted out of Amethi to Maharashtra. Rahul Gandhi&apos;s
              relationship with Amethi is not that of a leader-voter- it is
              strongly rooted in several decades of shared history. It is firmly
              entrenched in the close association and the deep bond he shares
              with the people of the district. From Rajiv Gandhi to Rahul
              Gandhi, the Gandhis have always chosen to represent the people of
              Amethi and have never shifted their constituency. Amethi has a
              come a long way since the 1980s. Today, it is regarded as one of
              the most peaceful, self-sufficient regions in Uttar Pradesh and is
              an emerging educational and industrial hub. The people have
              repeatedly shown their faith and trust in the Congress party and
              as the party that has represented the district for several
              decades, we will continue to serve the people with dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
