import React from "react";

import Image from "next/image";

const banner = "/constituency/amethi-healthcare/Healthcare-banner.png";

const hero = () => {
  return (
    <div className="md:relative">
      <Image
        src={banner}
        width={1920}
        height={717}
        alt="banner 1920 x 717"
        className="block h-auto max-w-full"
      />
    </div>
  );
};

export default hero;
