import React from "react";

import Image from "next/image";
import { Link } from "@/navigation";

import wayanad from "../../public/constituency/wayanad.jpg";
import amethi from "../../public/constituency/amethi.jpg";

import { Montserrat } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });

const states = () => {
  return (
    <main className={mons.className}>
      <div className="w-full h-full flex justify-center items-center mt-10 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#B7D1E2] p-5 flex flex-col justify-center items-center">
            <Image
              src="/constituency/bhandara_gondia.jpg"
              quality={100}
              width={300}
              height={300}
              alt="Rahul Gandhi in Wayanad"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Link
              href="/constituency/bhandara"
              className="text-[16px] md:text-[20px] lg:text-[25px] tracking-tighter underline mt-10 hover:text-gray-500 "
            >
              Bhandara
            </Link>
          </div>
          <div className="bg-[#B7D1E2] p-5 flex flex-col justify-center items-center">
            <Image
              src="/constituency/bhandara_gondia.jpg"
              quality={100}
              width={300}
              height={300}
              alt="Rahul Gandhi in Wayanad"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Link
              href="/constituency/gondiya"
              className="text-[16px] md:text-[20px] lg:text-[25px] tracking-tighter underline mt-10 hover:text-gray-500 "
            >
              Gondiya
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default states;
