import React, { Component } from "react";

import Product from "./product";

export default class ProductContainer extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="product-container-wrapper">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}
