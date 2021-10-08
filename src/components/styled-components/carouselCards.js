import React from "react";
import { Carousel } from "react-bootstrap";

export const CardOne = () => {
  return (
    <div className="card-one">
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </div>
  );
};
