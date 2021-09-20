import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Grid, Container } from "@material-ui/core";

import ProductCard from "./product-card";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://api-jomoandco.herokuapp.com//product/get")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [props]);

  function filterByCategory(filter) {
    console.log("filter");
  }

  return (
    <Container style={{ paddingTop: "10%" }}>
      <Container>
        <ButtonGroup>
          <Button onClick={() => filterByCategory("Scrunchies")}>
            Scrunchies
          </Button>
          <Button onClick={() => filterByCategory("Earrings")}>Earrings</Button>
          <Button onClick={() => filterByCategory("Charms")}>Charms</Button>
        </ButtonGroup>
      </Container>
      <Grid container spacing={6}>
        {products.map((product) => (
          <Grid item xs={5} sm={4} md={3} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
