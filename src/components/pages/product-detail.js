import React, { Component } from "react";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  getProducts() {
    fetch(
      `http://127.0.0.1:5000/product/get/id/${this.props.match.params.slug}`
    )
      .then((response) => {
        this.setState({
          product: response.data,
        });
        console.log(this.state.product);
      })
      .catch((error) => {
        console.log("Error getting products", error);
      });
  }

  render() {
    return <div className=""></div>;
  }
}
