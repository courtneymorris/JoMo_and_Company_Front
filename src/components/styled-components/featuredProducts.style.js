import React from "react";
import Carousel from "styled-components-carousel";

export const FeaturedPhotos = () => (
  <Carousel
    slidesToShow={6}
    center
    centerPadding={30}
    scaleOnFocus={1}
    breakpoints={[
      {
        size: 200,
        settings: {
          slidesToShow: 2,
          showIndicator: true,
          center: true,
          swipeable: true,
          infinite: true,
        },
      },
      {
        size: 450,
        settings: {
          slidesToShow: 3,
          showIndicator: true,
          center: true,
          swipeable: true,
          infinite: true,
        },
      },
      {
        size: 600,
        settings: {
          showArrows: true,
          slidesToShow: 4,
          showIndicator: true,
          center: true,
          swipeable: true,
          infinite: true,
        },
      },
      {
        size: 1000,
        settings: {
          showArrows: true,
          slidesToShow: 5,
          showIndicator: true,
          center: true,
          swipeable: true,
          infinite: true,
        },
      },
    ]}
  >
    <div className="carousel-photos">
      <img src="https://i.ibb.co/PrPJZ43/IMG-3499.jpg" />
    </div>
    <div className="carousel-photos">
      <img src="https://i.ibb.co/wWMdQNP/IMG-3497.jpg" />
    </div>
    <div className="carousel-photos">
      <img src="https://i.ibb.co/4Yt6gy4/Love-Letter.jpg" />
    </div>
    <div className="carousel-photos">
      <img src="https://i.ibb.co/tsp9LPn/IMG-3450.jpg" />
    </div>
    <div className="carousel-photos">
      <img src="https://i.ibb.co/b2XkBdn/IMG-3468.jpg" />
    </div>
    <div className="carousel-photos">
      <img src="https://i.ibb.co/XWrsTRg/IMG-3461.jpg" />
    </div>
  </Carousel>
);
