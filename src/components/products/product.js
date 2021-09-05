import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { id, name, description, price, image } = this.props.item;
    return (
      <div className="product-wrapper">
        <div className="name-wrapper">{name}</div>

        <div className="price-wrapper">{price}</div>

        <div className="product-image-wrapper">
          <img src={image} />
        </div>

        <div className="description-wrapper">{description}</div>
      </div>
    );
  }
}
