import React from "react";
import Image from "next/image";

interface HeroProps {
  bannerSrc: string;
}

const Hero: React.FC<HeroProps> = ({ bannerSrc }) => {
  return (
    <div className="md:relative">
      <Image
        src={bannerSrc}
        width={1920}
        height={717}
        alt="banner image"
        className="block h-auto max-w-full"
      />
    </div>
  );
};

export default Hero;
