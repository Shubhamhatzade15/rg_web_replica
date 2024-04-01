"use client";

import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Issues",
      link: "/issues",
    },
    {
      id: 4,
      title: "constituency",
      link: "/constituency",
    },
    {
      id: 5,
      title: "Media",
      link: "/media",
    },
    {
      id: 5,
      title: "Assets",
      link: "https://drive.google.com/drive/u/5/folders/18Te5JwlPz4V1bgFnbJA7vFj46Mrn5O81",
    },
  ];

  return (
    <div className="flex justify-between items-center gap-x-4 md:gap-x-8 md:flex-wrap w-full px-4 md:px-10  pt-4 md:pt-10 pb-4 nav">
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
                <div className="text-base md:text-xl font-bold">Dr. Prashant Padole</div>
              </div>
            </div>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex items-center flex-wrap gap-6 my-4 ">
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
              } nav-links cursor-pointer uppercase text-[#666]`}
            >
              <Link href={link}>{title}</Link>
            </li>
          );
        })}
        <li key={7} className="nav-links cursor-pointer uppercase text-[#666] ">
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
          <div className="uppercase bg-[#337ab7] text-white order-1">
            <Dropdown
              text={"Language"}
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
            />
          </div>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-2 bg-[#337ab7] text-gray-500 md:hidden order-2 z-50 text-white"
      >
        {nav ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </div>

      {nav && (
        <ul className="flex flex-col pt-20 absolute top-0 left-0 z-50 w-full h-screen bg-white text-gray-500 text-xl uppercase">
          {links.map(({ id, link, title }) => (
            <li key={id} className="px-4 cursor-pointer py-6">
              <Link onClick={() => setNav(!nav)} href={link}>
                {title}
              </Link>
            </li>
          ))}
          <li key={7} className="px-4 cursor-pointer text-[#666] py-6">
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
        </ul>
      )}

      <div className="uppercase bg-[#337ab7] text-white md:hidden order-1">
        <Dropdown
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
        />
      </div>
    </div>
  );
};

export default Navbar;
