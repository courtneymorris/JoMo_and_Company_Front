import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbar.style";
import banner from "../../../static/assets/images/banner.png";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Bars icon="bars" />
        <NavMenu>
          <NavLink to="/shop" activeClassName="active">
            Shop
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/markets" activeClassName="active">
            Shop In Person
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </NavMenu>
        <NavLink to="/">
          <img src={banner} />
        </NavLink>
        <NavBtn>
          <NavBtnLink to="login">Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
