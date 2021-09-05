import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import banner from "../../../static/assets/images/banner.png";

export default function HomeNavigation() {
  return (
    <div className="home-navigation-wrapper">
      <div className="home-banner">
        <img src={banner}></img>
      </div>

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

          <div className="home-link">
            <NavLink exact to="/about" activeClassName="nav-link-active">
              About JoMo & Co.
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
