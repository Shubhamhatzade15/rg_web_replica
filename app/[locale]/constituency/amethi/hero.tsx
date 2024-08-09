import React from "react";

import Image from "next/image";


const hero = () => {
  return (
    <div className="w-full h-full relative ">
      <Image src={"/constituency/amethi-banner.jpg"} width={1920} height={717} alt="Amethi 1920 x 717" />
    </div>
  );
};

export default hero;
