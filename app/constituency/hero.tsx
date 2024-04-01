import React from "react";

import Image from "next/image";

import banner from "../../public/constituency/Rahul-gandhi-constitution.jpg";

const hero = () => {
  return (
    <div className="w-full h-full relative ">
      <div className="bg-gray-300 w-full aspect-video md:aspect-[3/1] relative">
        <Image
          src="/assets/LandingPage/hero_new.jpg"
          alt="Hero image"
          width={2000}
          height={2000}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default hero;
