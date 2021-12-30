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
import { Box, IconButton } from "@material-ui/core";
// import { ClickAwayListener } from "@mui/material";

import headerLogo from "../../../static/assets/images/HeaderLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 50,
    right: "100%",
    left: "-90vw",
    zIndex: 2,
    boxShadow: "2px 5px 6px -2px",
    p: 1,
    align: "center",
    bgcolor: "#344e6f",
  };

  return (
    <div>
      <Nav>
        <LogoNavLink to="/">
          <img src={headerLogo} />
        </LogoNavLink>
        <Box sx={{ position: "relative" }}>
          <IconButton onClick={handleClick}>
            <Bars icon="bars" />
          </IconButton>
          {open ? (
            <Box sx={styles}>
              <NavLink
                to="/shop"
                activeClassName="active"
                onClick={handleClick}
              >
                Products
              </NavLink>
              <NavLink
                to="/markets"
                activeClassName="active"
                onClick={handleClick}
              >
                Shop In Person
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={handleClick}
              >
                Our Story
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/admin"
                activeClassName="active"
                onClick={handleClick}
              >
                Admin
              </NavLink>
            </Box>
          ) : null}
        </Box>
        <NavMenu>
          <NavLink to="/shop" activeClassName="active">
            Our Products
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

        {/* <NavBtn>
          <NavBtnLink to="admin">Admin</NavBtnLink>
        </NavBtn> */}
        {/* <button className="button-one">
          <span>Log In</span>
        </button> */}
      </Nav>
    </div>
  );
}
