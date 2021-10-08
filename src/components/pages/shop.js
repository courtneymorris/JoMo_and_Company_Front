import { Container, AppBar, Button, ButtonGroup } from "@material-ui/core";
import React, { useState } from "react";

import ProductContainer from "../products/product-container";
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";

export default function Shop(props) {
  return (
    <div className="shop-container">
      <Navbar />
      <Container>
        <ProductContainer />
        <div className="spacer" />
      </Container>
      <Footer />
    </div>
  );
}
