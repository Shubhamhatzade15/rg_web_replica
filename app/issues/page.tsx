import Image from "next/image";
import React from "react";

export default function page() {
  const issues = [
    {
      title: "Jobs and MSME",
      link: "/",
    },
    {
      title: "Agriculture",
      link: "/",
    },
    {
      title: "Land Aquistion Bill",
      link: "/",
    },
    {
      title: "Women Empowerment",
      link: "/",
    },
    {
      title: "Right to Information",
      link: "/",
    },
    {
      title: "Net Neutrality",
      link: "/",
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
            <div key={index+1} className="uppercase block py-4 px-2 border-b-2 border-[#337ab7] w-full group relative cursor-pointer">
              <a
                href={issue.link}
                className="block w-full h-full group-hover:text-white transition-all duration-800"
              >
                {issue.title}
              </a>
              <div className="h-0 w-full opacity-0 group-hover:h-full group-hover:opacity-100 bg-[#337ab7] absolute top-1/2 group-hover:top-0 left-0 transition-all duration-800 z-[-1]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
