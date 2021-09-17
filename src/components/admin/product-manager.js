import React, { Component } from "react";
import axios from "axios";

import ProductSidebarList from "./product-sidebar-list";
import ProductCRUDForm from "./product-CRUD-form";

export default class ProductManager extends Component {
  constructor() {
    super();

    this.state = {
      productItem: [],
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

  handleEditClick(productItem) {
    this.setState({
      productToEdit: productItem,
    });
  }

  handleDeleteClick(productItem) {
    axios
      .delete(`http://127.0.0.1:5000/product/delete/id/${productItem.id}`)
      .then((response) => {
        this.setState({
          productItems: this.state.productItems.filter((item) => {
            return item.id !== productItem.id;
          }),
        });

        return response.data;
      })
      .catch((error) => {
        console.log("handleDeleteClick error", error);
      });
  }

  handleEditFormSubmission() {
    this.getProductItems();
  }

  handleNewFormSubmission(productItem) {
    this.setState({
      productItems: [productItem].concat(this.state.productItems),
    });
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError error", error);
  }

  getProductItems() {
    axios
      .get("http://127.0.0.1:5000/product/get")
      .then((response) => {
        this.setState({
          productItems: [...response.data.product],
        });
      })
      .catch((error) => {
        console.log("Error in getProductItems: ", error);
      });
  }

  componentDidMount() {
    this.getProductItems();
  }

  render() {
    return (
      <div className="product-manager-wrapper">
        <div className="left-column">
          <ProductCRUDForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearProductToEdit={this.clearProductToEdit}
            productToEdit={this.state.productToEdit}
          />
        </div>

        <div className="right-column">
          <ProductSidebarList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.productItem}
            handleEditClick={this.handleEditClick}
          />
        </div>
      </div>
    );
  }
}
