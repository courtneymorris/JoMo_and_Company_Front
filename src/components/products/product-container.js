import React, { Component } from "react";

import Product from "./product";
import dummyData from "../../../static/assets/dummyData.json";

export default class ProductContainer extends Component {
  constructor(props) {
    super();

    this.state = {};

    this.productItems = this.productItems.bind(this);
  }

  productItems() {
    return dummyData.product.map((item) => {
      return <Product key={item.id} item={item} />;
    });
  }

  render() {
    return (
      <div className="product-container-wrapper">{this.productItems()}</div>
    );
  }
}
