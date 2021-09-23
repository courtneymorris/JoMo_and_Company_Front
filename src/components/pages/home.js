import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  Paper,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FeaturedPhotos } from "../styled-components/featuredProducts.style";

export default function Home() {
  return (
    <Container>
      <div className="home-links-wrapper">
        <div className="home-link">
          <NavLink exact to="/shop" activeClassName="nav-link-active">
            <Typography
              variant="h2"
              style={{ color: "#9999ff" }}
              align="center"
            >
              PRODUCTS
            </Typography>
          </NavLink>
        </div>

        <div className="home-link">
          <NavLink exact to="/markets" activeClassName="nav-link-active">
            <Typography
              variant="h2"
              style={{ color: "#9999ff" }}
              align="center"
            >
              MARKET
            </Typography>
          </NavLink>
        </div>

        <div className="home-link">
          <NavLink exact to="/contact" activeClassName="nav-link-active">
            <Typography
              variant="h2"
              style={{ color: "#9999ff" }}
              align="center"
            >
              CONTACT
            </Typography>
          </NavLink>
        </div>

        <div className="home-link">
          <NavLink exact to="/about" activeClassName="nav-link-active">
            <Typography
              variant="h2"
              style={{ color: "#9999ff" }}
              align="center"
            >
              ABOUT
            </Typography>
          </NavLink>
        </div>
      </div>

      <Container>
        <div className="carousel-wrapper">
          <div className="carousel-inner">
            <p>Take a peek at what's in store...</p>
            <FeaturedPhotos />
          </div>
        </div>
      </Container>
      <div className="spacer" />
    </Container>
  );
}
