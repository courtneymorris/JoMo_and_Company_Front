import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonBase,
  Card,
  CardActions,
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

{
  /* <Link to={`/product/${id}`}></Link> */
}

export default function ProductCard({ product }) {
  return (
    <Container>
      <Card hover="true" elevation={3}>
        <CardHeader
          style={{
            backgroundColor: "#f9fcee",
            paddingBottom: "0px",
          }}
          action={
            <Grid container>
              <Grid item>
                <IconButton style={{ padding: "5%" }}>
                  <FavoriteBorderRounded style={{ color: "#344e6f" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton style={{ padding: "5%" }}>
                  <ShoppingCartOutlinedIcon style={{ color: "#344e6f" }} />
                </IconButton>
              </Grid>
            </Grid>
          }
        />
        <Link to={`/product/${product.id}`}>
          <CardContent style={{ backgroundColor: "#f9fcee", color: "#344e6f" }}>
            <Paper elevation={3}>
              <CardMedia
                style={{ height: 0, paddingTop: "135%" }}
                image={`${product.featured_image}`}
              />
            </Paper>
            <Typography
              variant={"subtitle1"}
              noWrap={true}
              style={{ paddingTop: "10px" }}
            >
              {product.name}
            </Typography>
            <Typography variant={"subtitle2"}>{`$${product.price}`}</Typography>
          </CardContent>
        </Link>
      </Card>
    </Container>
  );
}
