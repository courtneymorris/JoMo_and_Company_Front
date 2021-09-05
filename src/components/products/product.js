import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="product-container">
        <h1>I'm a Product</h1>
      </div>
    );
  }
}
