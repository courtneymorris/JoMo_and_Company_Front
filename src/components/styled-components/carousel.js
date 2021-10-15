import React, { useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import { Container } from "@material-ui/core";

export default function HomeCarousel() {
  return (
    <Carousel fade className="carousel-wrapper">
      {/* <Carousel.Item className="carousel-item card-one">
        <div className="outer-box">
          <div className="inner-box">
            <Carousel.Caption className="caption">
              <h2>Discover the JoMo difference</h2>
            </Carousel.Caption>
          </div>
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
      </Carousel.Item> */}

      <Carousel.Item className="carousel-item card-five">
        <div className="outer-box-one">
          <div className="inner-box-one">
            <img src="https://i.ibb.co/ccYpCTC/denim-Earrings-Model.jpg" />
          </div>
        </div>
        <div className="outer-box-two">
          <div className="inner-box-two">
            <img src="https://i.ibb.co/2MWYyq4/pearly-Earrings2.jpg" />
          </div>
        </div>

        <div className="outer-caption-box">
          <div className="inner-caption-box">
            <Carousel.Caption className="caption">
              <h1>
                Styles that fit <div className="you">YOU</div>
              </h1>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
