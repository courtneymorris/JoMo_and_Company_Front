import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Grid, Container, Box } from "@material-ui/core";

import ProductCard from "./product-card";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://api-jomoandco.herokuapp.com/product/get")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [props]);

  function filterByCategory(filter) {
    console.log("filter");
  }

  return (
    <Box>
      <Box sx={{ m: 3, padding: "5%" }}>
        <ButtonGroup>
          <Button onClick={() => filterByCategory("Scrunchies")}>
            Scrunchies
          </Button>
          <Button onClick={() => filterByCategory("Earrings")}>Earrings</Button>
          <Button onClick={() => filterByCategory("Charms")}>Charms</Button>
        </ButtonGroup>
      </Box>
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
