import React from "react";
import Hero from "./hero";
import Image from "next/image";
import Card from "./Card";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("constituency");
  const news = [
    {
      img: "/news/timesofindia.webp",
      link: "https://timesofindia.indiatimes.com/elections/lok-sabha-elections/maharashtra/bhandara-gondiya/candidateshow/prashant-yadaorao-padole-1342",
    },
    {
      img: "/news/News18.svg",
      link: "https://www.news18.com/elections/bhandara-gondiya-election-result-2024-live-updates-highlights-lok-sabha-winner-loser-leading-trailing-mp-margin-8918534.html",
    },
    {
      img: "/news/indiatoday.png",
      link: "https://www.indiatoday.in/elections/lok-sabha/story/bhandara-gondiya-maharashtra-lok-sabha-election-results-2024-live-updates-clse-2547817-2024-06-04",
    },
    {
      img: "/news/wikipedia.svg",
      link: "https://en.m.wikipedia.org/wiki/Prashant_Yadaorao_Padole",
    },
    {
      img: "/news/loktej.webp",
      link: "https://www.loktej.com/article/101075/dr-prashant-y-padole-a-life-dedicated-to-service-and",
    },
    {
      img: "/news/samachar.jpg",
      link: "https://samacharsansaar.com/news/dr-prashant-y-padole-a-life-dedicated-to-service-and-leadership/4568/",
    },
    {
      img: "/news/business-patra.jpg",
      link: "https://businesspatra.com/dr-prashant-y-padole-a-life-dedicated-to-service-and-leadership/",
    },
    {
      img: "/news/Jansansar.webp",
      link: "https://jansansar.com/dr-prashant-y-padole-a-life-dedicated-to-service-and-leadership/",
    },
    {
      img: "/news/maharashtra24x7.webp",
      link: "https://maharashtra24x7.com/national-hindi/%e0%a4%a1%e0%a5%89-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b6%e0%a4%be%e0%a4%82%e0%a4%a4-%e0%a4%b5%e0%a4%be%e0%a4%88-%e0%a4%aa%e0%a4%a1%e0%a5%8b%e0%a4%b2%e0%a5%87-%e0%a4%b8%e0%a5%87%e0%a4%b5%e0%a4%be/",
    },
    {
      img: "/news/holamumbai.webp",
      link: "https://holamumbai.com/national-news/%E0%A4%A1%E0%A5%89-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4-%E0%A4%B5%E0%A4%BE%E0%A4%88-%E0%A4%AA%E0%A4%A1%E0%A5%8B%E0%A4%B2%E0%A5%87-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE/",
    },
    {
      img: "/news/livemumbai.webp",
      link: "https://hn.livemumbai.in/2024/04/18/%e0%a4%a1%e0%a5%89-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b6%e0%a4%be%e0%a4%82%e0%a4%a4-%e0%a4%b5%e0%a4%be%e0%a4%88-%e0%a4%aa%e0%a4%a1%e0%a5%8b%e0%a4%b2%e0%a5%87-%e0%a4%b8%e0%a5%87%e0%a4%b5%e0%a4%be/",
    },
    {
      img: "/news/prakharjagran.webp",
      link: "https://prakharjagaran.com/%e0%a4%a1%e0%a5%89-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b6%e0%a4%be%e0%a4%82%e0%a4%a4-%e0%a4%b5%e0%a4%be%e0%a4%88-%e0%a4%aa%e0%a4%a1%e0%a5%8b%e0%a4%b2%e0%a5%87-%e0%a4%b8%e0%a5%87%e0%a4%b5%e0%a4%be/",
    },
    {
      img: "/news/sattaexpress.webp",
      link: "https://sattaexpress.co.in/hn/2024/04/18/%e0%a4%a1%e0%a5%89-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b6%e0%a4%be%e0%a4%82%e0%a4%a4-%e0%a4%b5%e0%a4%be%e0%a4%88-%e0%a4%aa%e0%a4%a1%e0%a5%8b%e0%a4%b2%e0%a5%87-%e0%a4%b8%e0%a5%87%e0%a4%b5%e0%a4%be/",
    },
    {
      img: "/news/shekhawatisamachar.webp",
      link: "https://shekhawatisamachar.com/hindi/index.php/2024/04/18/dr-prashant-y-padole-a-life-dedicated-to-service-and-leadership/",
    },
    {
      img: "/news/nagpurnewstoday.webp",
      link: "https://nagpurnewstoday.com/2024/04/18/%e0%a4%a1%e0%a5%89-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b6%e0%a4%be%e0%a4%82%e0%a4%a4-%e0%a4%b5%e0%a4%be%e0%a4%88-%e0%a4%aa%e0%a4%a1%e0%a5%8b%e0%a4%b2%e0%a5%87-%e0%a4%b8%e0%a5%87%e0%a4%b5%e0%a4%be/",
    },
  ];

  return (
    <div>
      <Hero />
      <div className="bg-white p-10 md:px-80 md:pt-10">
        <div className="flex items-center justify-between">
          <h1 className="md:text-4xl text-3xl font-bold text-slate-900">
          {t("news")}
          </h1>
        </div>
        <br />
        <div className="text-xl text-justify grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <Card key={index} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
