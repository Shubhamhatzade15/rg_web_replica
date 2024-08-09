import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "News And Features - Dr Prashant Padole - Indian National Congress",
  description:
    "Dr. Prashant Yadavrao Padole is an eminent figure who has left an indelible impact on the Bhandara-Gondiya constituency through his unwavering strength and compassion.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
