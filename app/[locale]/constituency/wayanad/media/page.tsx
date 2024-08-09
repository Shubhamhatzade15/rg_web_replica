import React from "react";

import Hero from "./hero";
import Breadcrumb from "./breadcrumb";
import Media from "./media";

export default function page() {
  return (
    <div>
      <Hero />
      <Breadcrumb />
      <Media />
    </div>
  );
}
