import React from "react";
import Carousel from "styled-components-carousel";

export const ProductPhotos = () => (
  <Carousel
    slidesToShow={3}
    center
    centerPadding={30}
    breakpoints={[
      {
        size: 200,
        settings: {
          slidesToShow: 1,
          showArrows: false,
          showIndicator: false,
          swipeable: true,
        },
      },
      {
        size: 600,
        settings: {
          slidesToShow: 3,
          showArrows: false,
          showIndicator: true,
          swipeable: true,
        },
      },
      {
        size: 1000,
        settings: {
          slidesToShow: 4,
          showArrows: true,
          showIndicator: true,
          center: true,
          swipeable: true,
        },
      },
    ]}
  >
    <div>
      <span>1</span>
    </div>
    <div>
      <span>2</span>
    </div>
    <div>
      <span>3</span>
    </div>
  </Carousel>
);
