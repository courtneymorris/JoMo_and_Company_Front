import { Container, AppBar, Button, ButtonGroup } from "@material-ui/core";
import React, { useState } from "react";

import ProductContainer from "../products/product-container";

export default function Shop(props) {
  return (
    <Container>
      <ProductContainer />
    </Container>
  );
}
