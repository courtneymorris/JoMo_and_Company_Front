import React, { useState } from "react";
import HomeNavigation from "../navigation/home-navigation";

import ProductContainer from "../products/product-container";

export default function Home() {
  return (
    <div className="home-wrapper">
      <HomeNavigation />
    </div>
  );
}
