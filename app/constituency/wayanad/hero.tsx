import React from "react";

import Image from "next/image";

import banner from "../../../public/constituency/wayanad_banner.jpg";

const hero = () => {
  return (
    <div className="w-full h-full relative ">
      <Image
        src={banner}
        quality={100}
        alt="Wayanad Visit"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default hero;
