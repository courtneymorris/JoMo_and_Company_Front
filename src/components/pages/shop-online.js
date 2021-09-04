import React, { Component } from "react";

import ProductDetail from "./product-detail";

export default class ShopOnline extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="shop-online-wrapper">
        <h1>Shop Online Home Page</h1>
        <ProductDetail />
      </div>
    );
  }
}
