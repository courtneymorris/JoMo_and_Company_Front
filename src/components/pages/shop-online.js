import React, { Component } from "react";

import ProductDetail from "./product-detail";
import ProductContainer from "../products/product-container";

export default class ShopOnline extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="shop-online-wrapper">
        <h1>Shop Online Home Page</h1>
        <ProductContainer />
      </div>
    );
  }
}
