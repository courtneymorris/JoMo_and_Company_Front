import React, { Component } from "react";

import { ProductItem } from "../styled-components/product.style";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderImages = this.renderImages.bind(this);
  }

  renderImages(imageArray) {
    return imageArray.map((image) => {
      return <img src={image["image_url"]} key={image["image_url"]} />;
    })[0];
  }

  // featuredImage(imageArray) {
  //   return imageArray.filter((image) => {
  //     image.product_id === product.id
  //   })
  // }

  render() {
    const { id, category, collection, name, description, price, images } =
      this.props.item;
    return (
      <ProductItem>
        <div className="product-image-wrapper">{this.renderImages(images)}</div>
        <div className="name-wrapper">{name}</div>
        <div className="price-wrapper">{`$${price}`}</div>
      </ProductItem>
    );
  }
}
