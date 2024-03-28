import React from "react";
import StayInLoop from "../constituency/StayInLoop";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
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
                <ImFacebook2 className="text-4xl" />
              </li>
              <li>
                <FaTwitterSquare className="text-4xl" />
              </li>
              <li>
                <FaLinkedin className="text-4xl" />
              </li>
              <li>
                <FaGooglePlusSquare className="text-4xl" />
              </li>
            </ul>
            <span className="text-sm text-white sm:text-center ">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Rahul Gandhi
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex space-x-2 text-center justify-center text-xs text-white">
              <Link href="#"> Terms and Conditions </Link>
              <Link href="#"> Privacy Policy </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
