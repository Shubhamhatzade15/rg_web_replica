import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Content = () => {


  const t = useTranslations("about");

  return (
    <div className="">
      <div className="bg-white p-10 md:px-80 md:pt-10">
        <div className="flex items-center justify-between">
          <h1 className="md:text-4xl text-3xl font-bold text-slate-900">
            {t("title")}
          </h1>
        </div>
        <br />
        <div className="text-2xl md:text-xl text-justify ">
          <p>
          {t("para1")}
          </p>
          <br />
          <div className="bg-gray-300 w-full relative">
            <Image
              src="/media/media_bg.jpg"
              alt="Hero image"
              width={2000}
              height={2000}
              className="object-cover w-full h-full"
            />
          </div>
          <br />
          <p>
          {t("para2")}
          </p>
          <br />
          <p>
          {t("para3")}  
          </p>
          <br />
          <p>
          {t("para4")}
          </p>

          <br />

          <p>
          {t("para5")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
