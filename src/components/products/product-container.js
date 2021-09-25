import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Grid, Container, Box } from "@material-ui/core";
import { Button, ButtonContainer } from "../styled-components/button.style";

import ProductCard from "./product-card";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://api-jomoandco.herokuapp.com/product/get")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, [props]);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  function filterByCategory(filter) {
    setProducts(
      productData.filter((item) => {
        return item.category === filter;
      })
    );
  }

  return (
    <Box>
      <ButtonContainer>
        <Button onClick={() => filterByCategory("Scrunchies")}>
          Scrunchies
        </Button>
        <Button onClick={() => filterByCategory("Earrings")}>Earrings</Button>
        <Button onClick={() => filterByCategory("Charms")}>Charms</Button>
        <Button onClick={() => setProducts(productData)}>Show All</Button>
      </ButtonContainer>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
