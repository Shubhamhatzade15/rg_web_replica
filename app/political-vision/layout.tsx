import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Political Vision - Dr Prashant Padole - Indian National Congress",
  description:
    "A majority of these young individuals have a high school education or less and are desperately seeking a mechanism to transform their lives.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
