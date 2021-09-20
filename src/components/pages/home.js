import {
  Container,
  Typography,
  Button,
  Card,
  Paper,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

export default function Home() {
  return (
    <Container>
      <div className="home-links-wrapper">
        <div className="home-link shop">
          <NavLink exact to="/shop" activeClassName="nav-link-active">
            <Typography variant="h2" color="primary" align="center">
              SHOP ONLINE
            </Typography>
          </NavLink>
        </div>

        <div className="home-link">
          <NavLink exact to="/in-person" activeClassName="nav-link-active">
            <Typography variant="h2" color="primary" align="center">
              SHOP IN PERSON
            </Typography>
          </NavLink>

          <NavLink exact to="/about" activeClassName="nav-link-active">
            <Typography variant="h2" color="primary" align="center">
              ABOUT JOMO & CO.
            </Typography>
          </NavLink>

          <NavLink exact to="/contact" activeClassName="nav-link-active">
            <Typography variant="h2" color="primary" align="center">
              CONTACT US
            </Typography>
          </NavLink>
        </div>
      </div>
    </Container>
  );
}
