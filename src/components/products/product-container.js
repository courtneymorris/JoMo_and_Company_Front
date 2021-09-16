import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  TabPanel,
  Container,
} from "@material-ui/core";

import ProductCard from "./productCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/product/get")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleFilter = (filter) => {
    setProducts(
      products.filter((product) => {
        return product.category === filter;
      })
    );
  };

  return (
    <Container style={{ paddingTop: "10%" }}>
      <Button onClick={() => handleFilter("Scrunchies")}>Scrunchies</Button>
      <Button onClick={() => handleFilter("Earrings")}>Earrings</Button>
      <Button onClick={() => handleFilter("Charms")}>Charms</Button>
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
