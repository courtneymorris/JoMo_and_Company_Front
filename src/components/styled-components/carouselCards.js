import React from "react";
import { Carousel } from "react-bootstrap";

export const CardOne = () => {
  return (
    <Carousel.Item className="carousel-item card-one">
      <Carousel.Caption className="card-one caption">
        <h3>Hello</h3>
      </Carousel.Caption>
    </Carousel.Item>
  );
};
