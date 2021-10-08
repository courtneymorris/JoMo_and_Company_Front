import React, { useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import { Container } from "@material-ui/core";

export default function HomeCarousel() {
  return (
    <Carousel fade className="carousel-wrapper">
      <Carousel.Item className="carousel-item card-one"></Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/mySmwFp/Untitled-Artwork-8.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/4Yt6gy4/Love-Letter.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/nsrVKHM/Untitled-Artwork-15.png"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/PrPJZ43/IMG-3499.jpg"
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
