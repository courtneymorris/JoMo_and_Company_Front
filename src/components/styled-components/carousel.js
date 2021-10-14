import React, { useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import { Container } from "@material-ui/core";

export default function HomeCarousel() {
  return (
    <Carousel fade className="carousel-wrapper">
      <Carousel.Item className="carousel-item card-one">
        <div className="inner-box">
          <Carousel.Caption className="card-one caption">
            <h2>Discover the JoMo difference</h2>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel-item card-two">
        <div className="inner-box">
          <img
            className="grid-column-one"
            src="https://i.ibb.co/XXDm00d/scrunchie-Book.jpg"
          />
          <img
            className="grid-column-two"
            src="https://i.ibb.co/WPmQyZp/teal-Earrings.jpg"
          />
          <img
            className="grid-column-three"
            src="https://i.ibb.co/VD7QbG1/scrunchies-Book.jpg"
          />
          <Carousel.Caption className="caption">
            <h2 className="image-text">ALL HANDMADE</h2>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel-item card-three">
        <div className="inner-box">
          <Carousel.Caption className="caption">
            <h1>EVERY PIECE</h1>
            <h2>EVERY STITCH</h2>
            <h3>EVERY DETAIL</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel-item card-four">
        <div className="inner-box">
          <Carousel.Caption className="caption">
            <h1>Quality that lasts</h1>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
