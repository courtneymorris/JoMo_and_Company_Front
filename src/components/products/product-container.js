import React, { Component } from "react";
import axios from "axios";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Paper,
} from "@material-ui/core";

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
      return (
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <Card raised color={"pink"}>
            <Paper variant="outlined">
              <Product key={item.id} item={item} />
            </Paper>
          </Card>
        </Grid>
      );
    });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <Grid container spacing={4} justifyContent="center">
        {this.productItems()}
      </Grid>
    );
  }
}
