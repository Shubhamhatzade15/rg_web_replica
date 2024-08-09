import React from "react";

import Image from "next/image";

const hero = () => {
  return (
    <div className="w-full h-full relative ">
      <Image
        src={"/wayanad-media/1_wayanad_image_banner.jpg"}
        width={1920}
        height={727}
        alt="wayanad media banner 1920 x 727"
      />
    </div>
  );
};

export default hero;
