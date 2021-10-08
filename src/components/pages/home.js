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
import { Col, Row } from "react-bootstrap";
import HomeCarousel from "../styled-components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLogo from "../../../static/assets/images/FloatingLogo.png";
import { AppContainer } from "../styled-components/container.style";

export default function Home() {
  return (
    <Col>
      <Row>
        <HomeCarousel />
      </Row>

      <Row>
        <div className="home-nav-wrapper">
          <div className="home-nav-link">
            <NavLink exact to="/shop" activeClassName="nav-link-active">
              PRODUCTS
            </NavLink>
          </div>
          <div className="home-nav-link">
            <NavLink exact to="/markets" activeClassName="nav-link-active">
              MARKET
            </NavLink>
          </div>
          <div className="home-nav-link">
            <NavLink exact to="/contact" activeClassName="nav-link-active">
              CONTACT
            </NavLink>
          </div>
          <div className="home-nav-link">
            <NavLink exact to="/about" activeClassName="nav-link-active">
              ABOUT
            </NavLink>
          </div>
        </div>

        <div className="home-logo-wrapper">
          <img src={FloatingLogo} />
        </div>
      </Row>

      {/* <div className="home-links-wrapper">
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
      </div> */}

      {/* <Container>
        <div className="carousel-wrapper">
          <div className="carousel-inner">
            <p>Take a peek at what's in store...</p>
            <FeaturedPhotos />
          </div>
        </div>
      </Container> */}
    </Col>
  );
}
