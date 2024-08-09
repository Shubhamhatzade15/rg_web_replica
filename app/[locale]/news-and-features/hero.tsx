import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-300 w-full aspect-video md:aspect-[3/1] relative">
      <Image
        src="/media/photos/3333633098720706680_65789562970.jpg"
        alt="Hero image"
        width={2000}
        height={2000}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Hero;
