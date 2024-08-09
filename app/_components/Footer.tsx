import React from "react";
import StayInLoop from "../[locale]/constituency/StayInLoop";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const issues = [
    {
      title: "issues.jobs",
      link: "/political-vision/job-creation-and-msmes",
    },
    {
      title: "issues.agriculture",
      link: "/political-vision/agriculture",
    },
    {
      title: "issues.agriculture",
      link: "/political-vision/land-acquisition-bill",
    },
    {
      title: "issues.women",
      link: "/political-vision/womens-empowerment",
    },
    {
      title: "issues.rti",
      link: "/political-vision/right-to-information-act",
    },
    {
      title: "issues.net",
      link: "/political-vision/net-neutrality",
    },
  ];
  return (
    <div>
      <StayInLoop />
      <div>
        <footer className="p-4 bg-[#2f7cb7] md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-5 md:divide-x-2 divide-white text-white gap-4">
            <div className="px-4">
              <h4 className="text-xl font-bold">{t("home.title")}</h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <a href="#support-us">{t("home.join")}</a>
                </li>
                <li>
                  <a href="#feeds">{t("home.feed")}</a>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h4 className="text-xl font-bold">{t("about.title")}</h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <a href="/about">{t("about.about")}</a>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h4 className="text-xl font-bold">{t("issues.title")}</h4>
              <ul className="list-disc px-4 space-y-2">
                {issues.map((issue, index) => (
                  <li key={index}>
                    <Link href={issue.link}>{t(issue.title)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4">
              <h4 className="text-xl font-bold">{t("constituency.title")}</h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <Link href="/constituency/bhandara">
                    {t("constituency.bhandara")}
                  </Link>
                </li>
                <li>
                  <Link href="/constituency/gondiya">
                    {t("constituency.gondia")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h4 className="text-xl font-bold">{t("media.title")}</h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <Link href="/media">{t("media.photos")}</Link>
                </li>
                <li>
                  <Link href="/media">{t("media.videos")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-8 text-white flex gap-4 flex-col md:flex-row items-center">
            <p className="text-xl font-bold">{t("connect")}</p>
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
            <Link href="/terms&conditions"> {t("terms")} </Link>
            <Link href="/privacypolicy"> {t("privacy")} </Link>
          </div>

          <div className="flex space-x-2 text-center justify-center text-xs text-white mt-4">
            {t("developer")}&nbsp;
            <a
              href="https://gbjbuzz.com/"
              className="underline"
              target="_blank"
            >
              GBJ BUZZ PVT. LTD.
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
