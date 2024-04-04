import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="p-4 lg:px-40 md:px-20 py-10 bg-[#dee8f0]">
      <p className="text-center">
        To provide your support to our mission of a secular, democratic, just
        and inclusive India, join the conversation and sign up below,
      </p>
      <form
        action="https://getform.io/f/pbqgkqyb"
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 my-4"
        
      >
        <input
          type="text"
          className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none "
          placeholder="Name*"
          name="name"
          required
          data-aos="zoom-in"
        />
        <input
          type="tel"
          className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none"
          placeholder="Phone Number*"
          name="phone"
          required
          data-aos="zoom-in"
        />
        <input
          type="email"
          className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none"
          placeholder="Enter Email*"
          name="email"
          required
          data-aos="zoom-in"
        />
        <input
          type="text"
          className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none"
          placeholder="Pin Code*"
          name="pin-code"
          required
          data-aos="zoom-in"
        />
        <button
          type="submit"
          className="uppercase px-4 py-2 bg-[#337ab7] w-fit place-self-center text-white md:col-start-1 md:col-end-3 rounded-xl"
          data-aos="zoom-in"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
