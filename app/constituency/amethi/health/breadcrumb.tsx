import React from "react";

import { Montserrat } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });

function breadcrumb() {
  return (
    <nav
      aria-label="breadcrumb"
      className={`w-full text-base md:text-lg ${mons.className} font-normal md:font-medium`}
    >
      <ol className="flex flex-wrap items-center w-full px-4 py-2 rounded-md">
        <li className="flex items-center antialiased">
          <a
            href="/constituency/wayanad"
            className="text-[#2F7CB7] hover:opacity-60 hover:underline"
          >
            Amethi
          </a>
          <span className="mx-2 antialiased pointer-events-none select-none">
            /
          </span>
        </li>
        <li className="flex items-center antialiased">
          <a href="#" className=" cursor-text ">
            Healthcare
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default breadcrumb;
