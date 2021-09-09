import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import banner from "../../../static/assets/images/banner.png";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-links-wrapper">
        <div className="home-link shop">
          <NavLink exact to="/shop" activeClassName="nav-link-active">
            Shop Online
          </NavLink>
        </div>

        <div className="home-link">
          <NavLink exact to="/in-person" activeClassName="nav-link-active">
            Shop in Person
          </NavLink>

          <NavLink exact to="/about" activeClassName="nav-link-active">
            About JoMo & Co.
          </NavLink>
        </div>
      </div>
    </div>
  );
}
