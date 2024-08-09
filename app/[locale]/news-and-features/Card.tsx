import Image from "next/image";
import React from "react";

export default function Card({ img, link }: { img: string; link: string }) {
  return (
    <div className="">
      <a
        href={link}
        target="_blank"
        className="font-bold hover:text-[#249cd7] hover:underline mt-2 block"
      >
        <div className="w-full aspect-[4/3] rounded-xl overflow-clip border-2 p-4">
          <Image
            src={img}
            alt="Hero image"
            width={1000}
            height={1000}
            className="object-contain w-full h-full"
          />
        </div>
      </a>
    </div>
  );
}
