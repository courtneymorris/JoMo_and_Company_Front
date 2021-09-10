import React, { Component } from "react";

import ProductContainer from "../products/product-container";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return <ProductContainer />;
  }
}
