import React from "react";
import "../../issues/style.css";

export default function bhandara() {
  const issues = [
    {
      title: "Arjuni-Morgaon (SC)",
      link: "/political-vision/job-creation-and-msmes",
    },
    {
      title: "Tirora",
      link: "/political-vision/agriculture",
    },
    {
      title: "Gondia",
      link: "/political-vision/land-acquisition-bill",
    },
  ];

  return (
    <div>
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
