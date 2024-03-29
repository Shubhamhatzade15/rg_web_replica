import Image from "next/image";
import React from "react";

import "./style.css";

export default function page() {
  const issues = [
    {
      title: "Jobs and MSME",
      link: "/political-vision/job-creation-and-msmes",
    },
    {
      title: "Agriculture",
      link: "/political-vision/agriculture",
    },
    {
      title: "Land Aquistion Bill",
      link: "/political-vision/land-acquisition-bill",
    },
    {
      title: "Women Empowerment",
      link: "/political-vision/womens-empowerment",
    },
    {
      title: "Right to Information",
      link: "/political-vision/right-to-information-act",
    },
    {
      title: "Net Neutrality",
      link: "/political-vision/net-neutrality",
    },
    {
      title: "Dalit Rights",
      link: "/political-vision/dalit-rights",
    },
    {
      title: "Adivasi Rights",
      link: "/political-vision/adivasi-rights",
    },
    {
      title: "NATIONAL RURAL EMPLOYEMENT GUARANTEE ACT",
      link: "/political-vision/national-rural-employment-guarantee-act",
    },
    {
      title: "GOODS AND SERVICE TAX",
      link: "/political-vision/goods-and-services-tax",
    },
    {
      title: "DECENTRALISATION OF POWER",
      link: "/political-vision/decentralisation-of-power-policy-design",
    },
    {
      title: "DEMOCRATISATION OF ICU/NSUI",
      link: "/political-vision/democratisation-of-iyc-nsui",
    },
  ];

  return (
    <div className="">
      <div className="bg-gray-300 w-full aspect-video md:aspect-[3/1] relative">
        <Image
          src="/assets/Issues/issue_banner.jpg"
          alt="Hero image"
          width={2000}
          height={2000}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 px-6 lg:px-60 md:px-20 text-[#337ab7]">
        {issues.map((issue, index) => {
          return (
            // <div
            //   key={index + 1}
            //   className="uppercase block py-4 px-2 border-b-2 border-[#337ab7] w-full group relative cursor-pointer"
            // >
            //   <a
            //     href={issue.link}
            //     className="block w-full h-full group-hover:text-white transition-all duration-800 uppercase"
            //   >
            //     {issue.title}
            //   </a>
            //   <div className="h-0 w-full opacity-0 group-hover:h-full group-hover:opacity-100 bg-[#337ab7] absolute top-1/2 group-hover:top-0 left-0 transition-all duration-800 z-[-1]"></div>
            // </div>
            <div
              key={index + 1}
              className="hvr-shutter-out-vertical uppercase block border-b border-[#337ab7] w-full group relative cursor-pointer"
            >
              <a
                href={issue.link}
                className="block w-full h-full py-4 px-2 group-hover:text-white"
              >
                {issue.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
