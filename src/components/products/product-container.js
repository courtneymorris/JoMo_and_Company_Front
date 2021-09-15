import React, { useEffect, useState } from "react";
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

import ProductCard from "./productCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/product/get")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={5} sm={4} md={3} lg={2} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
