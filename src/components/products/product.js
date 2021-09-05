import React, { Component } from "react";

import dummyData from "../../../static/assets/dummyData.json";
import NavigationContainer from "../navigation/shop-navigation";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="product-wrapper">
        <h1>I'm a product</h1>
      </div>
    );
  }
}
