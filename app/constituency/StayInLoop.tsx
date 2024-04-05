"use client";

import React, { useState } from "react";

import { Montserrat } from "next/font/google";
import { supabase } from "../supabase";

const mons = Montserrat({ subsets: ["latin"] });

export default function StayInLoop() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pinCode: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(false);
    try {
      const { data, error } = await supabase.from("Form 1").insert([formData]);
      if (error) {
        throw error;
      }
      alert("Form Submitted Suuccessfully!");
      setLoading(true);
      // Optionally, reset the form after successful submission
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
    <main className={`${mons.className} py-10 bg-[#B7D1E2] mt-20 `}>
      <div className="flex flex-col lg:flex-row justify-start items-start lg:justify-center lg:items-center px-5 lg-px-0">
        <div className="flex justify-start items-start">
          <p className="text-[25px] uppercase mx-2 mb-3 lg:mb-0 lg:mr-5 ">
            Support Us
          </p>
        </div>
        <form className="flex justify-center" action="" onSubmit={handleSubmit}>
          <div className="underline px-2 mb-3 lg:mb-0">
            <input
              className="bg-transparent w-full border-0 rounded-none outline-none cursor-text text-black shadow-none border-b border-b-black"
              placeholder="Phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end items-end">
            <button
              type="submit"
              className="text-white bg-[#327db7] text-sm px-5 py-2.5 uppercase mx-2 lg:mx-5 rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
