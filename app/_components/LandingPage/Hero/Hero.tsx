import Image from "next/image";
import React, { useEffect } from "react";
import "./Hero.css";
import bgImage from "./background.png";
import { useState } from "react";
import { supabase } from "../../../[locale]/supabase";
import { useTranslations } from "next-intl";

export default function Hero() {

  const t = useTranslations("home");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pinCode: "",
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.from("Form 1").insert([formData]);
      if (error) {
        throw error;
      }
      alert("Form Submitted Suuccessfully!");
      // Optionally, reset the form after successful submission
      setLoading(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        pinCode: "",
      });
    } catch (error: any) {
      console.error("Error inserting data:", error.message);
    }
  };

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      id="support-us"
    >
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
      <div className="p-4 md:px-20 grid grid-cols-1 md:grid-cols-2">
        <div className=" w-full" data-aos="fade-in">
          <Image
            src="/Nana + Prashant (Badal Hava).png"
            alt="Hero image"
            width={2000}
            height={2000}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-4 place-content-center" data-aos="fade-up">
          <h3 className="text-3xl text-center lg:text-left">
            {t("join")}
          </h3>
          <form onSubmit={handleSubmit}>
            <p className="text-xl font-bold">{t("name")}*</p>
            <input
              type="text"
              className="w-full block border-2 p-2"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <p className="text-xl font-bold">{t("email")}*</p>
            <input
              type="email"
              className="w-full block border-2 p-2 w-full"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <p className="text-xl font-bold">{t("phone")}*</p>
            <input
              type="tel"
              className="w-full block border-2 p-2 w-full"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <div>
              <div className="grid grid-cols-1 place-items-center mt-10">
                <button className="border-2 p-2 text-white bg-black uppercase w-full md:w-fit rounded-xl">
                  {
                    t(loading ? "Posting Data..." : "submit")
                  }
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
