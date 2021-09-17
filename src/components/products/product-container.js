import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Tab,
  Tabs,
  TabPanel,
  Container,
} from "@material-ui/core";

import ProductCard from "./productCard";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/product/get")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

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
