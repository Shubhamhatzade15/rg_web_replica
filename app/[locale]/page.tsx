"use client";

import Image from "next/image";
import { useState } from "react";
import Hero from "../_components/LandingPage/Hero/Hero";
import Video from "../_components/LandingPage/Video/Video";
import Form from "../_components/LandingPage/Form/Form";
import Social from "../_components/LandingPage/Social/Social";

export default function Home() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const quotes = [
    {
      id: 1,
      quote: "Hi there",
    },
    {
      id: 2,
      quote: "Hello",
    },
    {
      id: 3,
      quote: "How are you",
    },
    {
      id: 4,
      quote: "What's up",
    },
  ];

  return (
    <main className="">
      <Hero />
      <Video />
      <Social />
      <Form />
    </main>
  );
}
