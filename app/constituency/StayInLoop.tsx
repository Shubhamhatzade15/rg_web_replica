import React from "react";

import { Montserrat } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });

export default function StayInLoop() {
  return (
    <main className={`${mons.className} py-10 bg-[#B7D1E2] mt-20 `}>
      <div className="flex flex-col lg:flex-row justify-start items-start lg:justify-center lg:items-center px-5 lg-px-0">
        <div className="flex justify-start items-start">
          <p className="text-[25px] uppercase mx-2 mb-3 lg:mb-0 lg:mr-5 ">
            Support Us
          </p>
        </div>
        <div className="w-full lg:w-[30%] underline px-2 mb-3 lg:mb-0">
          <input
            className="bg-transparent w-full border-0 rounded-none outline-none cursor-text text-black shadow-none border-b border-b-black"
            placeholder="Phone"
            type="tel"
          />
        </div>
        <div className="w-full lg:w-fit flex justify-end items-end">
          <button
            type="button"
            className="text-white bg-[#327db7] text-sm px-5 py-2.5 uppercase mx-2 lg:mx-5 rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
