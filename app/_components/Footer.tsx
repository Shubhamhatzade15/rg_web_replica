import React from "react";
import StayInLoop from "../constituency/StayInLoop";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <StayInLoop />
      <div>
        <footer className="p-4 bg-[#2f7cb7] md:p-8 lg:p-10">
          <div className="mx-auto max-w-screen-xl text-center">
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
              <a href="https://gbjbuzz.com/">
                Developed By <span className="underline"> GBJ Buzz</span>
              </a>
            </span>

            <div className="flex space-x-2 text-center justify-center text-xs text-white">
              <Link href="terms&conditions"> Terms and Conditions </Link>
              <Link href="privacypolicy"> Privacy Policy </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
