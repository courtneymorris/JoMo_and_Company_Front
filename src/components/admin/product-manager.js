import React, { Component } from "react";
import { Box, Grid } from "@material-ui/core";

import ProductSidebarList from "./product-sidebar-list";
import ProductCRUDForm from "./product-CRUD-form";

export default class ProductManager extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productToEdit: {},
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearProductToEdit = this.clearProductToEdit.bind(this);
  }

  clearProductToEdit() {
    this.setState({
      productToEdit: {},
    });
  }

  handleEditClick(product) {
    this.setState({
      productToEdit: product,
    });
  }

  handleDeleteClick(product) {
    fetch(
      `https://api-jomoandco.herokuapp.com/product/delete/id/${product.id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        this.setState({
          products: this.state.products.filter((item) => {
            return item.id !== product.id;
          }),
        });
      })
      .catch((error) => {
        console.log("Error deleting product", error);
      });
  }

  handleEditFormSubmission() {
    this.getProducts();
  }

  handleNewFormSubmission(product) {
    this.setState({
      products: [product].concat(this.state.products),
    });
  }

  handleFormSubmissionError(error) {
    console.log("Error submitting form", error);
  }

  getProducts() {
    fetch("https://api-jomoandco.herokuapp.com/product/get")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
        });
      })
      .catch((error) => {
        console.log("Error getting products", error);
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <Grid container sx={{ gridTemplateColumns: "2fr 1fr" }}>
        <Grid item>
          <ProductCRUDForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearProductToEdit={this.clearProductToEdit}
            productToEdit={this.state.productToEdit}
          />
        </Grid>

        <Grid item>
          <ProductSidebarList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.products}
            handleEditClick={this.handleEditClick}
          />
        </Grid>
      </Grid>
    );
  }
}
