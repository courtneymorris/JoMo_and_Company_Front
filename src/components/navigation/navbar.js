import React from "react";

import {
  Nav,
  NavLink,
  LogoNavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbar.style";
import headerLogo from "../../../static/assets/images/HeaderLogo.png";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Bars icon="bars" />
        <LogoNavLink to="/">
          <img src={headerLogo} />
        </LogoNavLink>
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

        <NavBtn>
          <NavBtnLink to="login">Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
