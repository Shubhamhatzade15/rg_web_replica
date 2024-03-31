import Image from "next/image";
import React, { useEffect } from "react";
import "./Hero.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div>
      <div className="bg-gray-300 w-full aspect-video md:aspect-[3/1] relative">
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
      </div>

      <div className="p-4 md:px-20 py-10 bg-[#dee8f0]">
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
      </div>
    </div>
  );
}
