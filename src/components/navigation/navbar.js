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

  const handleClickOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 50,
    right: 0,
    left: -200,
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "ivory",
  };

  return (
    <div>
      <Nav>
        <LogoNavLink to="/">
          <img src={headerLogo} />
        </LogoNavLink>
        <Box sx={{ position: "relative" }}>
          <IconButton onClick={handleClickOpen}>
            <Bars icon="bars" />
          </IconButton>
          {open ? (
            <Box sx={styles}>
              <NavLink
                to="/shop"
                activeClassName="active"
                onClick={handleClickOpen}
              >
                Shop Online
              </NavLink>
              <NavLink
                to="/markets"
                activeClassName="active"
                onClick={handleClickOpen}
              >
                Shop In Person
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={handleClickOpen}
              >
                Our Story
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={handleClickOpen}
              >
                Contact Us
              </NavLink>
            </Box>
          ) : null}
        </Box>
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
          <NavBtnLink to="admin">Admin</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
}
