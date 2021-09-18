import { Container, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  btn: {
    fontSize: "60px",
    backgroundColor: "primary",
    "&:hover": {
      backgroundColor: "secondary",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
});

import banner from "../../../static/assets/images/banner.png";

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h1"
        color="secondary"
        align="center"
      >
        HELLO
      </Typography>
      <Typography variant="h2" color="textPrimary" align="right">
        HELLO
      </Typography>
      <Typography variant="h3" color="textSecondary" align="left">
        HELLO
      </Typography>
      <Button
        className={classes.btn}
        onClick={() => console.log("button was clicked")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      />
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
    </Container>
  );
}
