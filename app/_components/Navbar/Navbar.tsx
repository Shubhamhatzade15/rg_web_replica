"use client";

import "./Navbar.css";
import Image from "next/image";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import Dropdown from "./Dropdown";
import { IoHome } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { RiUserLocationFill } from "react-icons/ri";
import { IoNewspaperSharp } from "react-icons/io5";
import { GoFileMedia } from "react-icons/go";
import { MdPermMedia } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { useTranslations } from "next-intl";
import Lang from "./lang";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
      iconL: <IoHome className="inline pr-2 text-2xl" />,
    },
    {
      id: 2,
      title: "About",
      link: "/about",
      iconL: <FaCircleInfo className="inline pr-2 text-2xl" />,
    },
    {
      id: 3,
      title: "Issues",
      link: "/issues",
      iconL: <AiOutlineIssuesClose className="inline pr-2 text-2xl" />,
    },
    {
      id: 4,
      title: "constituency",
      link: "/constituency",
      iconL: <RiUserLocationFill className="inline pr-2 text-2xl" />,
    },
    {
      id: 5,
      title: "News And Features",
      link: "/news-and-features",
      iconL: <IoNewspaperSharp className="inline pr-2 text-2xl" />,
    },
    {
      id: 6,
      title: "Media",
      link: "/media",
      iconL: <GoFileMedia className="inline pr-2 text-2xl" />,
    },
    {
      id: 7,
      title: "Assets",
      link: "https://drive.google.com/drive/u/5/folders/18Te5JwlPz4V1bgFnbJA7vFj46Mrn5O81",
      iconL: <MdPermMedia className="inline pr-2 text-2xl" />,
    },
  ];

  const t = useTranslations();

  return (
    <div className="overflow-x-clip sticky top-0 z-[999] bg-[#249cd7] text-white shadow flex justify-between items-center gap-x-4 md:gap-x-8 md:flex-wrap w-full px-4 md:px-10  pt-4 pb-4 nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a href="/">
            <div className="flex items-center">
              <div className="w-12 aspect-square border-2 rounded-full overflow-clip">
                <Image
                  src="/Dr.Prashant_Cutout.jpg"
                  alt="logo"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center ml-2 uppercase">
                <div className="text-sm md:text-2xl font-bold">{t("name")}</div>
              </div>
            </div>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex items-center flex-wrap gap-6 my-4">
        {links.map(({ id, link, title }) => {
          const pathSegments = pathname.split("/");
          const linkSegments = link.split("/");
          const isActive = linkSegments.every(
            (seg, i) => pathSegments[i] === seg
          );

          return (
            <li
              key={id}
              className={`${
                isActive ? "active" : ""
              } nav-links cursor-pointer uppercase`}
            >
              <Link href={link}>{title}</Link>
            </li>
          );
        })}
        <li key={7} className="nav-links cursor-pointer uppercase">
          <Dropdown
            text="Social Media"
            links={[
              {
                title: "Facebook",
                link: "https://www.facebook.com/people/Prashant-Padole/pfbid02ERmQbJSVCTfsvsEyJqJR9Cr7rY7aENGSdVZ65vPfmSHosLcyjFJY3sbqTvBCKval/",
              },
              {
                title: "Twitter",
                link: "https://twitter.com/_Prashantpadole",
              },
              {
                title: "Instagram",
                link: "https://www.instagram.com/drprashantpadole?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              },
            ]}
          />
        </li>
        <li>
          <div className="uppercase bg-[#337ab7] text-white order-1 rounded-xl">
            <Lang />
          </div>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-2 bg-[#337ab7] text-gray-500 md:hidden order-2 z-50 text-white"
      >
        {nav ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </div>

      <div
        className={`w-full h-screen flex justify-end absolute top-0 right-0 z-50 transition-all duration-200 bg-black bg-opacity-60 backdrop-blur ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul
          className={`bg-[#249cd7] text-white flex flex-col w-[90%] h-screen text-gray-500 text-lg uppercase divide-y-2 divide-gray-300 shadow-4xl `}
        >
          <li className="py-2 px-2 bg-white pt-20 text-[#249cd7]">
            <h1 className="text-center">
              <a href="/" className="mx-auto">
                <div className="flex items-center">
                  <div className="w-12 aspect-square border-2 rounded-full overflow-clip">
                    <Image
                      src="/Dr.Prashant_Cutout.jpg"
                      alt="logo"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center ml-2 uppercase">
                    <div className="text-sm md:text-2xl font-bold">
                      Dr. Prashant Padole
                    </div>
                  </div>
                </div>
              </a>
            </h1>
          </li>
          {links.map(({ id, link, title, iconL }) => (
            <li
              key={id}
              className="px-4 bg-[#249cd7] cursor-pointer  py-2 hover:bg-[#337ab7]"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {iconL}
                {title}
              </Link>
            </li>
          ))}
          <li key={7} className="px-4 cursor-pointer py-2 bg-[#249cd7]">
            <IoShareSocial className="inline pr-2 text-2xl" />
            SOCIAL MEDIA <VscTriangleDown className="inline" />
            <ul className="pl-8 space-y-2 py-2">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Prashant-Padole/pfbid02ERmQbJSVCTfsvsEyJqJR9Cr7rY7aENGSdVZ65vPfmSHosLcyjFJY3sbqTvBCKval/"
                >
                  FACEBOOK
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/_Prashantpadole">
                  TWITTER
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/drprashantpadole?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="uppercase bg-[#337ab7] min-w-[fit-content] text-white md:hidden order-1 rounded-xl">
        {/* <Dropdown
          text="Language"
          links={[
            {
              title: "English",
              link: "#",
            },
            {
              title: "Hindi",
              link: "#",
            },
          ]}
        /> */}
        <Lang />
      </div>
    </div>
  );
};

export default Navbar;
