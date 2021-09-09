import React, { Component } from "react";

import ProductContainer from "../products/product-container";
import NavigationContainer from "../navigation/navbar";

export default class Shop extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="shop-wrapper">
        <ProductContainer />
      </div>
    );
  }
}
