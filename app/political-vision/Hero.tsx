import React from "react";
import Image from "next/image";

interface HeroProps {
  bannerSrc: string;
}

const Hero: React.FC<HeroProps> = ({ bannerSrc }) => {
  return (
    <div className="h-full w-full">
      <div className="md:relative bg-gray-300 w-full aspect-video md:aspect-[3/1]">
        <Image
          src={bannerSrc}
          width={1920}
          height={717}
          alt="banner image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
