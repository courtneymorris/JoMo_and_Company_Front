import React, { Component } from "react";
import axios from "axios";

import Product from "./product";

import { ProductContainerGrid } from "../styled-components/product-container.style";

export default class ProductContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      data: [],
    };
  }

  getProducts() {
    axios
      .get("http://127.0.0.1:5000/product/get")
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  productItems() {
    return this.state.data.map((item) => {
      return <Product key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return <ProductContainerGrid>{this.productItems()}</ProductContainerGrid>;
  }
}
