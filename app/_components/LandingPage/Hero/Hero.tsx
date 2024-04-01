import Image from "next/image";
import React, { useEffect } from "react";
import "./Hero.css";
import bgImage from "./background.png"

export default function Hero() {


  return (
    <div className="hero" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    
    }}>
      {/* <div className="bg-gray-300 w-full aspect-video md:aspect-[3/1] relative">
        <Image
          src="/assets/LandingPage/hero_new.jpg"
          alt="Hero image"
          width={2000}
          height={2000}
          className="object-cover w-full h-full"
        />
        <div
          className="embla w-full py-4 px-2 bg-[#337ab7] bg-opacity-60 absolute bottom-0 left-0 text-center text-white"
          ref={emblaRef}
        >
          <div className="embla__container gap-2 items-center">
            <div className="embla__slide">
              <p>
                &quot;If one accepts the notion that ideas capture people then
                the only possible response to a person infected by a bad idea,
                is love and compassion.&quot;
              </p>
            </div>
            <div className="embla__slide">
              <p>
                &quot;If opportunity is limited to a few, our growth will be a
                fraction of our capability as a nation.&quot;
              </p>
            </div>
            <div className="embla__slide">
              <p>
                &quot;The Congress Party constructs a bottom-up vision.&quot;
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="p-4 md:px-20 py-10 bg-[#dee8f0]">
        <p>
          Dr. Prashant Yadavrao Padole, an eminent figure of unwavering strength
          and compassion, has made an indelible impact on the Bhandara-Gondiya
          constituency. Armed with a distinguished educational background,
          including an MBBS and MD, he not only possesses exceptional medical
          expertise but also exemplifies unwavering dedication
          to his profession.
        </p>
        <a href="/about" className="text-blue-500">
          Read More
        </a>
      </div> */}
      <div className="p-4 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <Image
            src="/assets/LandingPage/Padole.png"
            alt="Hero image"
            width={2000}
            height={2000}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-4">
          <div className="w-full">
            <Image src="/assets/LandingPage/Slogan.png" alt="Hero image" width={500} height={500} className="object-contain max-h-[200px] h-full" />
          </div>
          <h3 className="text-3xl">Join Our Movement</h3>
          <div>
            <h4 className="text-xl font-bold">Name*</h4>
            <div className="grid grid-cols-1 gap-2">
              <input
                type="text"
                className="border-2 p-2"
                placeholder="Name"
                name="name"
                required
              />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold">Email*</h4>
            <input
              type="email"
              className="border-2 p-2 w-full"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div>
            <h4 className="text-xl font-bold">Phone Number*</h4>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
              className="border-2 p-2 w-full"
              placeholder="Phone Number"
              name="phone"
              required
            />
          </div>

          <div>
            <div className="grid grid-cols-1 place-items-center">
              <button className="border-2 p-2 text-white bg-black uppercase w-full md:w-1/4">Submit</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
