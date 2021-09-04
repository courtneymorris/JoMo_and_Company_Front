import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Featured from "../featured-products";

export default function Home() {
  return (
    <div className="big-links-wrapper">
      <NavLink exact to="/shop">
        Shop Online
      </NavLink>
      <NavLink exact to="/in-person">
        Shop In Person
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>

      <Featured />
    </div>
  );
}
