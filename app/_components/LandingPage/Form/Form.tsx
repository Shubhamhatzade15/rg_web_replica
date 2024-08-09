import React from "react";
import "./Form.css";
import { useState } from "react";
import { supabase } from "../../../[locale]/supabase";

export default function Form() {
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
    <div className="p-4 lg:px-40 md:px-20 py-10 bg-[#dee8f0]">
      <p className="text-center">
        To provide your support to our mission of a secular, democratic, just
        and inclusive India, join the conversation and sign up below,
      </p>
      <form
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 my-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none "
          placeholder="Name*"
          name="name"
          required
          data-aos="zoom-in"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none"
          placeholder="Phone Number*"
          name="phone"
          required
          data-aos="zoom-in"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none"
          placeholder="Enter Email*"
          name="email"
          required
          data-aos="zoom-in"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none"
          placeholder="Pin Code*"
          name="pinCode"
          required
          data-aos="zoom-in"
          value={formData.pinCode}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="uppercase px-4 py-2 bg-[#337ab7] w-fit place-self-center text-white md:col-start-1 md:col-end-3 rounded-xl"
          data-aos="zoom-in"
        >
          {loading ? "Posting Data..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
