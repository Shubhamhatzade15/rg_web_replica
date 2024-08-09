import React from "react";

import Image from "next/image";

export default function Hero() {
    const banner = "/constituency/amethi/education_banner (1).jpg";

  return (
    <div className="md:relative">
      <Image
        src={banner}
        width={1920}
        height={717}
        alt="Amethi-industry 1920 x 717"
        className="block h-auto w-full"
      />
    </div>
  );
};