import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-300 w-full aspect-video md:aspect-[3/1] relative">
      <Image
        src="/assets/about_banner.jpg"
        alt="Hero image"
        width={2000}
        height={2000}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Hero;
