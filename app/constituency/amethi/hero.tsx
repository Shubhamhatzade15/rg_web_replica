import React from "react";

import Image from "next/image";

import banner from "../../../public/constituency/amethi-banner.jpg";

const hero = () => {
  return (
    <div className="w-full h-full relative ">
      <Image src={banner} width={1920} height={717} alt="Amethi 1920 x 717" />
    </div>
  );
};

export default hero;
