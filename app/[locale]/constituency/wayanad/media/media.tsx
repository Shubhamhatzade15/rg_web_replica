import Image from "next/image";
import { MdPhotoCamera } from "react-icons/md";

import { Montserrat } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });

const data = [
  {
    text: "I am extremely proud to represent the people of Wayanad: Shri Rahul Gandhi",
    src: "/wayanad-media/img-1.jpg",
  },
  {
    text: "I am extremely proud to represent the people of Wayanad: Shri Rahul Gandhi",
    src: "/wayanad-media/img-2.jpg",
  },
  {
    text: "I am extremely proud to represent the people of Wayanad: Shri Rahul Gandhi",
    src: "/wayanad-media/img-3.jpg",
  },
  {
    text: "I am extremely proud to represent the people of Wayanad: Shri Rahul Gandhi",
    src: "/wayanad-media/img-4.jpg",
  },
  {
    text: "Shri Rahul Gandhi leads a Save the Constitution March in Wayanad",
    src: "/wayanad-media/img-5.jpg",
  },
  {
    text: "Shri Rahul Gandhi leads a Save the Constitution March in Wayanad",
    src: "/wayanad-media/img-6.jpg",
  },
  {
    text: "Shri Rahul Gandhi inaugurates a High School in Sultan Bathery, Wayanad",
    src: "/wayanad-media/img-7.jpg",
  },
  {
    text: "Shri Rahul Gandhi inaugurates a High School in Sultan Bathery, Wayanad",
    src: "/wayanad-media/img-8.jpg",
  },
  {
    text: "Shri Rahul Gandhi inaugurates a High School in Sultan Bathery, Wayanad",
    src: "/wayanad-media/img-9.jpg",
  },
  {
    text: "Shri Rahul Gandhi honours members from the flood relief team",
    src: "/wayanad-media/img-10.jpg",
  },
  {
    text: "Shri Rahul Gandhi honours members from the flood relief team",
    src: "/wayanad-media/img-11.jpg",
  },
  {
    text: "Shri Rahul Gandhi honours members from the flood relief team",
    src: "/wayanad-media/img-12.jpg",
  },
  {
    text: "Shri Rahul Gandhi visits residents at St. Claret school",
    src: "/wayanad-media/img-13.jpg",
  },
];

export default function Media() {
  return (
    <div className={mons.className}>
      <div className="p-4 px-6 lg:px-60 md:px-20">
        <div className="p-t-6 flex justify-center gap-8 border-b-2 border-[#337ab7] text-center text-[#337ab7]">
          <div className={`px-4 cursor-pointer border-b-2 border-[#337ab7]`}>
            <MdPhotoCamera className="text-5xl" />
            Image
          </div>
        </div>

        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div className="" key={index}>
              <div className="aspect-video bg-black">
                <Image
                  src={item.src}
                  alt="blog image"
                  width={400}
                  height={400}
                />
              </div>
              <small>{item.text}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
