import React, { Component } from "react";

import ProductContainer from "../products/product-container";
import NavigationContainer from "../navigation/shop-navigation";

export default class ShopOnline extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="shop-wrapper">
        <div className="left-side">
          <NavigationContainer />
        </div>

        <div className="right-side">
          <div className="shop-banner">
            <h1>Shop Online Home Page</h1>
          </div>
          <div className="products-wrapper">
            <ProductContainer />
          </div>
        </div>
      </div>
    );
  }
}
