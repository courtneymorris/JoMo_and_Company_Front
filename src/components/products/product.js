import React, { Component } from "react";
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
  ImageList,
} from "@material-ui/core";

import { ProductItem } from "../styled-components/product.style";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderImages = this.renderImages.bind(this);
  }

  renderImages(imageArray) {
    return imageArray.map((image) => {
      return <img src={image["image_url"]} key={image["image_url"]} />;
    })[0];
  }

  // featuredImage(imageArray) {
  //   return imageArray.filter((image) => {
  //     image.product_id === product.id
  //   })
  // }

  render() {
    const {
      id,
      category,
      collection,
      name,
      description,
      price,
      featured_image,
    } = this.props.item;
    return (
      <div>
        <CardMedia
          style={{ height: 0, paddingTop: "150%" }}
          image={`${featured_image}`}
        />
        <CardContent>
          <Typography variant={"h6"}>{name}</Typography>
          <Typography>{`$${price}`}</Typography>
        </CardContent>
      </div>
    );
  }
}
