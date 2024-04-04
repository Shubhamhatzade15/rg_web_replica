import React from "react";
import StayInLoop from "../constituency/StayInLoop";
import { ImFacebook2 } from "react-icons/im";
import {
  FaInstagram,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const issues = [
    {
      title: "Jobs and MSME",
      link: "/political-vision/job-creation-and-msmes",
    },
    {
      title: "Agriculture",
      link: "/political-vision/agriculture",
    },
    {
      title: "Land Aquistion Bill",
      link: "/political-vision/land-acquisition-bill",
    },
    {
      title: "Women Empowerment",
      link: "/political-vision/womens-empowerment",
    },
    {
      title: "Right to Information",
      link: "/political-vision/right-to-information-act",
    },
    {
      title: "Net Neutrality",
      link: "/political-vision/net-neutrality",
    },
  ];
  return (
    <div>
      <StayInLoop />
      <div>
        <footer className="p-4 bg-[#2f7cb7] md:px-40">
          {/* <div className="mx-auto max-w-screen-xl text-center">
            <ul className="flex flex-wrap justify-center items-center mb-6 space-x-2 text-white">
              <li>
                <Link href={"https://www.facebook.com/people/Prashant-Padole/pfbid02ERmQbJSVCTfsvsEyJqJR9Cr7rY7aENGSdVZ65vPfmSHosLcyjFJY3sbqTvBCKval/"}>
                  <ImFacebook2 className="text-4xl" />
                </Link>
              </li>
              <li>
                <Link href={"https://twitter.com/_Prashantpadole"}>
                  <FaTwitterSquare className="text-4xl" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/drprashantpadole?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}>
                  <FaInstagramSquare className="text-4xl" />
                </Link>
              </li>
            </ul>
            <span className="text-sm text-white sm:text-center ">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Dr. Prashant Padole
              </a>
              . All Rights Reserved.
              <br />
            </span>

            <div className="flex space-x-2 text-center justify-center text-xs text-white">
              <Link href="terms&conditions"> Terms and Conditions </Link>
              <Link href="privacypolicy"> Privacy Policy </Link>
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-5 md:divide-x-2 divide-white text-white gap-4">
            <div className="px-4">
              <h4 className="text-xl font-bold">Home</h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <a href="#support-us">Join Our Movement</a>
                </li>
                <li>
                  <a href="#feeds">Feed</a>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h4 className="text-xl font-bold">About</h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <a href="/about">About Dr. Prashant Padole</a>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h4 className="text-xl font-bold">Issues</h4>
              <ul className="list-disc px-4 space-y-2">
                {issues.map((issue, index) => (
                  <li key={index}>
                    <Link href={issue.link}>{issue.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4">
              <h4 className="text-xl font-bold">Constituency</h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <Link href="/constituency/bhandara">Bhandara</Link>
                </li>
                <li>
                  <Link href="/constituency/gondia">Gondia</Link>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h4 className="text-xl font-bold">Media</h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <Link href="/media">Photos</Link>
                </li>
                <li>
                  <Link href="/media">Videos</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-8 text-white flex gap-4 flex-col md:flex-row items-center">
            <p className="text-xl font-bold">
              Connect with Dr. Prashant Padole
            </p>
            <ul className="flex flex-wrap justify-center items-center space-x-2 text-white">
              <li>
                <Link
                  href={
                    "https://www.facebook.com/people/Prashant-Padole/pfbid02ERmQbJSVCTfsvsEyJqJR9Cr7rY7aENGSdVZ65vPfmSHosLcyjFJY3sbqTvBCKval/"
                  }
                >
                  <ImFacebook2 className="text-4xl" />
                </Link>
              </li>
              <li>
                <Link href={"https://twitter.com/_Prashantpadole"}>
                  <FaTwitterSquare className="text-4xl" />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.instagram.com/drprashantpadole?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  }
                >
                  <FaInstagramSquare className="text-4xl" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex space-x-2 text-center justify-center text-xs text-white">
            <Link href="terms&conditions"> Terms and Conditions </Link>
            <Link href="privacypolicy"> Privacy Policy </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
