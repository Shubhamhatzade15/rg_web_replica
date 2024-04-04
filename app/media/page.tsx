"use client";

import Image from "next/image";
import { useState } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdPhotoCamera } from "react-icons/md";

export default function Media() {
  const [tab, setTab] = useState(1);

  const images = [
    {
      src: "/media/photos/3330241633502413834_65789562970.jpg",
    },
    {
      src: "/media/photos/3330491973447599176_65789562970.jpg",
    },
    {
      src: "/media/photos/3330496462728567819_65789562970.jpg",
    },
    {
      src: "/media/photos/3330568175856351421_65789562970.jpg",
    },
    {
      src: "/media/photos/3330583065165704120_65789562970.jpg",
    },
    {
      src: "/media/photos/3330596746156130890_63165385511.jpg",
    },
    {
      src: "/media/photos/3331008317999217639_65014608945.jpg",
    },
    {
      src: "/media/photos/3330596746156130890_63165385511.jpg",
    },
    {
      src: "/media/photos/3331224377258756908_65789562970.jpg",
    },
    {
      src: "/media/photos/3331957469632012757_65789562970.jpg",
    },
    {
      src: "/media/photos/3332208921378148201_65789562970.jpg",
    },
    {
      src: "/media/photos/3332648091649059078_65789562970.jpg",
    },
    {
      src: "/media/photos/3332726268408931035_65789562970.jpg",
    },
    {
      src: "/media/photos/3332876848326535073_65789562970.jpg",
    },
    {
      src: "/media/photos/3332930719483355218_65789562970.jpg",
    },
    {
      src: "/media/photos/3333369327438164477_65789562970.jpg",
    },
    {
      src: "/media/photos/3333485688431298876_65789562970.jpg",
    },
    {
      src: "/media/photos/3333585905611442670_65789562970.jpg",
    },
    {
      src: "/media/photos/3333616691323490674_65822504428.jpg",
    },
    {
      src: "/media/photos/3333633098712323453_65789562970.jpg",
    },
    {
      src: "/media/photos/3333633098720706680_65789562970.jpg",
    },
    {
      src: "/media/photos/3333768006202889970_65789562970.jpg",
    },
    {
      src: "/media/photos/3333768006203023027_65789562970.jpg",
    },
    {
      src: "/media/photos/3333768006203066515_65789562970.jpg",
    },
    {
      src: "/media/photos/3333768006211212897_65789562970.jpg",
    },
    {
      src: "/media/photos/3333768006211234642_65789562970.jpg",
    },
    {
      src: "/media/photos/3333768006211284739_65789562970.jpg",
    },
    {
      src: "/media/photos/3333768006211294773_65789562970.jpg",
    },
    {
      src: "/media/photos/3333768006320368820_65789562970.jpg",
    },
    {
      src: "/media/photos/3333768006320404962_65789562970.jpg",
    },
    {
      src: "/media/photos/3333788101739819326_65789562970.jpg",
    },
    {
      src: "/media/photos/3333834500777507011_65789562970.jpg",
    },
    {
      src: "/media/photos/3333834500894937868_65789562970.jpg",
    },
    {
      src: "/media/photos/3333834500895062587_65789562970.jpg",
    },
    {
      src: "/media/photos/3333941704201380176_65789562970.jpg",
    },
    {
      src: "/media/photos/3333834500911921167_65789562970.jpg",
    },
    {
      src: "/media/photos/3334283411765919938_65789562970.jpg",
    },
    {
      src: "/media/photos/3334283411765931907_65789562970.jpg",
    },
    {
      src: "/media/photos/3334283411774330038_65789562970.jpg",
    },
    {
      src: "/media/photos/3334298904845552088_65789562970.jpg",
    },
    {
      src: "/media/photos/3334298904853939999_65789562970.jpg",
    },
    {
      src: "/media/photos/3334298904979691147_65789562970.jpg",
    },
    {
      src: "/media/photos/3334542801179506726_65789562970.jpg",
    },
    {
      src: "/media/photos/3334542801187709522_65789562970.jpg",
    },
    {
      src: "/media/photos/3334542801187876561_65789562970.jpg",
    },
    {
      src: "/media/photos/3334542801187882395_65789562970.jpg",
    },
    {
      src: "/media/photos/3334569915853236582_65789562970.jpg",
    },
    {
      src: "/media/photos/3334569915853261657_65789562970.jpg",
    },
    {
      src: "/media/photos/3334569916197177375_65789562970.jpg",
    },
    {
      src: "/media/photos/3334569916205442877_65789562970.jpg",
    },
    {
      src: "/media/photos/3335176434072389898_65789562970.jpg",
    },
    {
      src: "/media/photos/3335652625586273119_65789562970.jpg",
    },
    {
      src: "/media/photos/3335660097864124451_65789562970.jpg",
    },
    {
      src: "/media/photos/3335698519258778812_65789562970.jpg",
    },
    {
      src: "/media/photos/3335712058530351338_65789562970.jpg",
    },
    {
      src: "/media/photos/3335712059302168409_65789562970.jpg",
    },
    {
      src: "/media/photos/3335712059679777557_65789562970.jpg",
    },
  ];

  const videos = [
    {
      src: "/media/videos/3330526451364750601_65789562970.mp4",
    },
    {
      src: "/media/videos/3330624506056533550_65574604144.mp4",
    },
    {
      src: "/media/videos/3332054850105439129_51820523346.mp4",
    },
    {
      src: "/media/videos/3332937332614881284_51820523346.mp4",
    },
    {
      src: "/media/videos/3333028906536433957_63165385511.mp4",
    },
    {
      src: "/media/videos/3334074791665161543_65789562970.mp4",
    },
    {
      src: "/media/videos/3334444902013500852_65789562970.mp4",
    },
    {
      src: "/media/videos/3334568288136039782_65789562970.mp4",
    },
    {
      src: "/media/videos/3335007541146495801_65789562970.mp4",
    },
    {
      src: "/media/videos/3335184326047542143_65789562970.mp4",
    },
  ];

  return (
    <div>
      <div className="bg-gray-300 w-full aspect-video md:aspect-[3/1] relative">
        <Image
          src="/media/media_bg.jpg"
          alt="Hero image"
          width={2000}
          height={2000}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4 px-6 lg:px-60 md:px-20">
        <div className="p-t-6 flex justify-center gap-8 border-b-2 border-[#337ab7] text-center text-[#337ab7]">
          <div
            className={`px-4 cursor-pointer ${
              tab === 0 ? "border-b-2 border-[#337ab7]" : ""
            }`}
            onClick={() => setTab(0)}
          >
            <BsFillCameraVideoFill className="text-5xl" />
            Video
          </div>
          <div
            className={`px-4 cursor-pointer ${
              tab === 1 ? "border-b-2 border-[#337ab7] px-4" : ""
            }`}
            onClick={() => setTab(1)}
          >
            <MdPhotoCamera className="text-5xl" />
            Image
          </div>
        </div>

        {tab === 0 && (
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index}>
                <div className="aspect-video bg-black">
                  <video className="h-full w-full" controls>
                    <source
                      src={video.src}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index}>
                <div className="aspect-[4/3] bg-gray-300">
                  <Image
                    src={image.src}
                    alt="blog image"
                    width={400}
                    height={400}
                    className="m-auto h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
