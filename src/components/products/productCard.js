import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
  Paper,
  ButtonGroup,
} from "@material-ui/core";
import FavoriteBorderRounded from "@material-ui/icons/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import red from "@material-ui/core/colors/red";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <Container>
      <Card elevation={3}>
        <CardHeader
          style={{
            backgroundColor: "#745e82",
          }}
          action={
            <Grid container>
              <Grid item>
                <IconButton style={{ padding: "5%" }}>
                  <FavoriteBorderRounded style={{ color: "#d6d4ed" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton style={{ padding: "5%" }}>
                  <ShoppingCartOutlinedIcon style={{ color: "#d6d4ed" }} />
                </IconButton>
              </Grid>
            </Grid>
          }
        />
        <CardMedia
          style={{ height: 0, paddingTop: "150%" }}
          image={`${product.featured_image}`}
        />
        <CardContent style={{ backgroundColor: "#745e82", color: "#ffffff" }}>
          <Typography variant={"subtitle1"} noWrap={true}>
            {product.name}
          </Typography>
          <Typography variant={"subtitle2"}>{`$${product.price}`}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
