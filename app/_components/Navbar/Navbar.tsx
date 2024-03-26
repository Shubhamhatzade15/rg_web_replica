"use client";

import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

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
      id: 6,
      title: "Busting Myths",
      link: "/busting-myths",
    },
  ];

  return (
    <div className="flex justify-between items-center md:flex-wrap w-full px-4 md:px-10 lg:px-40 pt-4 md:pt-10 pb-4 nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a href="/">
            <Image
              src="/assets/logo.png"
              width={400}
              height={400}
              className="max-w-[150px] max-h-auto"
              alt="logo"
            />
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex items-center flex-wrap gap-8 my-4 ">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className={`${pathname === link ? "active" : ""} nav-links cursor-pointer uppercase text-[#666]`}
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
        <li key={7} className="nav-links cursor-pointer uppercase text-[#666] ">
          RG on Social Media <VscTriangleDown className="inline" />
        </li>
        <li>
          <button className="uppercase px-2 py-2 bg-[#337ab7] text-white order-1">
            Language <VscTriangleDown className="inline" />
          </button>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-2 bg-[#337ab7] text-white z-10 text-gray-500 md:hidden order-2"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-white text-gray-500 text-xl uppercase">
          {links.map(({ id, link, title }) => (
            <li key={id} className="px-4 cursor-pointer py-6">
              <Link onClick={() => setNav(!nav)} href={link}>
                {title}
              </Link>
            </li>
          ))}
          <li key={7} className="px-4 cursor-pointer text-[#666] py-6">
            RG on Social Media <VscTriangleDown className="inline" />
          </li>
        </ul>
      )}

      <button className="uppercase px-2 py-2 bg-[#337ab7] text-white md:hidden order-1">
        Language <VscTriangleDown className="inline" />
      </button>
    </div>
  );
};

export default Navbar;
