import React, { Component } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Paper,
} from "@material-ui/core";
import FavoriteBorderRounded from "@material-ui/icons/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch(
      `https://api-jomoandco.herokuapp.com/product/get/id/${this.props.match.params.slug}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          product: data,
        });
        console.log(this.state.product);
      })
      .catch((error) => {
        console.log("Error getting products", error);
      });
  }

  render() {
    const { name, category, collection, description, price, featured_image } =
      this.state.product;
    return (
      <Container>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={8} sm={6} md={4} lg={2}>
              <Paper>
                <img
                  src={featured_image}
                  style={{ width: "100%", height: "auto" }}
                />
              </Paper>
            </Grid>
            <Grid item xs={8} sm={6} md={4} lg={2}>
              <Box>
                <Grid container>
                  <Grid item>
                    <Typography variant={"h3"}>{name}</Typography>

                    <IconButton style={{ padding: "5%" }}>
                      <FavoriteBorderRounded style={{ color: "#344e6f" }} />
                    </IconButton>

                    <IconButton style={{ padding: "5%" }}>
                      <ShoppingCartOutlinedIcon style={{ color: "#344e6f" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography variant={"body1"}>{description}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
  }
}
