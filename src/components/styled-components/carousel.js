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
    </Carousel>
  );
}
