import React, { useState } from "react";
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
import { AppBar } from "@material-ui/core";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Nav>
        <LogoNavLink to="/">
          <img src={headerLogo} />
        </LogoNavLink>
        <Bars icon="bars" onClick={open ? handleMenuOpen : handleMenuClose}>
          <select>
            <option value="Shop Online">
              {" "}
              <NavLink to="/shop" activeClassName="active">
                Shop Online
              </NavLink>
            </option>
            <option value="Shop In Person">
              <NavLink to="/markets" activeClassName="active">
                Shop In Person
              </NavLink>
            </option>
            <option value="Our Story">
              <NavLink to="/about" activeClassName="active">
                Our Story
              </NavLink>
            </option>
            <option value="Contact Us">
              <NavLink to="/contact" activeClassName="active">
                Contact Us
              </NavLink>
            </option>
          </select>
        </Bars>
        <NavMenu>
          <NavLink to="/shop" activeClassName="active">
            Shop Online
          </NavLink>
          <NavLink to="/markets" activeClassName="active">
            Shop In Person
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            Our Story
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact Us
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="login">Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
}
