"use client";

import Image from "next/image";
import { useState } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdPhotoCamera } from "react-icons/md";

export default function Media() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div className="bg-gray-300 w-full aspect-video md:aspect-[3/1] relative">
        <Image
          src="/assets/Media/media-Banner.jpg"
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
            <div>
              <div className="aspect-video bg-black">
                <video className="h-full w-full" controls>
                  <source
                    src="/assets/LandingPage/video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <small>Interview with TV9</small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <video className="h-full w-full" controls>
                  <source
                    src="/assets/LandingPage/video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <small>Interview with TV9</small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <video className="h-full w-full" controls>
                  <source
                    src="/assets/LandingPage/video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <small>Interview with TV9</small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <video className="h-full w-full" controls>
                  <source
                    src="/assets/LandingPage/video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <small>Interview with TV9</small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <video className="h-full w-full" controls>
                  <source
                    src="/assets/LandingPage/video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <small>Interview with TV9</small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <video className="h-full w-full" controls>
                  <source
                    src="/assets/LandingPage/video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <small>Interview with TV9</small>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="aspect-video bg-black">
                <Image
                  src="/assets/Media/people_of_wayanad_shri_rahul_gandhi_1.jpg"
                  alt="blog image"
                  width={400}
                  height={400}
                />
              </div>
              <small>
                I am extremely proud to represent the people of Wayanad: Shri
                Rahul Gandhi
              </small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <Image
                  src="/assets/Media/people_of_wayanad_shri_rahul_gandhi_1.jpg"
                  alt="blog image"
                  width={400}
                  height={400}
                />
              </div>
              <small>
                I am extremely proud to represent the people of Wayanad: Shri
                Rahul Gandhi
              </small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <Image
                  src="/assets/Media/people_of_wayanad_shri_rahul_gandhi_1.jpg"
                  alt="blog image"
                  width={400}
                  height={400}
                />
              </div>
              <small>
                I am extremely proud to represent the people of Wayanad: Shri
                Rahul Gandhi
              </small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <Image
                  src="/assets/Media/people_of_wayanad_shri_rahul_gandhi_1.jpg"
                  alt="blog image"
                  width={400}
                  height={400}
                />
              </div>
              <small>
                I am extremely proud to represent the people of Wayanad: Shri
                Rahul Gandhi
              </small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <Image
                  src="/assets/Media/people_of_wayanad_shri_rahul_gandhi_1.jpg"
                  alt="blog image"
                  width={400}
                  height={400}
                />
              </div>
              <small>
                I am extremely proud to represent the people of Wayanad: Shri
                Rahul Gandhi
              </small>
            </div>
            <div>
              <div className="aspect-video bg-black">
                <Image
                  src="/assets/Media/people_of_wayanad_shri_rahul_gandhi_1.jpg"
                  alt="blog image"
                  width={400}
                  height={400}
                />
              </div>
              <small>
                I am extremely proud to represent the people of Wayanad: Shri
                Rahul Gandhi
              </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
