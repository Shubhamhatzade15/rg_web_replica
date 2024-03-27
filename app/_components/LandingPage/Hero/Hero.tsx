import Image from "next/image";
import React from "react";
import "./Hero.css"

export default function Hero() {
  return (
    <div>
      <div className="bg-gray-300 w-full aspect-[3/1] relative">
        <Image
          src="/assets/LandingPage/Amethi-banner-home.jpg"
          alt="Hero image"
          width={2000}
          height={2000}
          className="object-cover w-full h-full"
        />
        <div className="w-full py-4 px-2 bg-[#337ab7] bg-opacity-60 absolute bottom-0 left-0 text-center text-white">
        &quot;The Congress Party is about conversation. I&quot;m not coming here to tell
          you what to think, I&quot;m coming here to listen to what you have to say&quot;
        </div>
      </div>

      <div className="p-4 md:px-20 py-10 bg-[#dee8f0]">
        <p>
          Rahul Gandhi spent his early childhood between Delhi, the political
          center of India, and Dehradun, a town nestled in the valley between
          the Himalayas and Shivaliks. He began his undergraduate career at
          Delhi&quot;s St. Stephen&quot;s College before moving to Harvard University in
          the USA. In his second year, Rahul transferred to Rollins College in
          Florida due to security threats following his father&quot;s, the late Prime
          Minister Rajiv Gandhi, assassination. Rahul Gandhi graduated with a
          Bachelor&quot;s degree in 1994. The year after, he obtained his M. Phil
          from Trinity College, Cambridge.
        </p>
        <a href="/" className="text-blue-500">
          Read More
        </a>
      </div>
    </div>
  );
}
