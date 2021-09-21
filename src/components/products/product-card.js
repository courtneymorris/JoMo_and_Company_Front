import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonBase,
  Box,
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

export default function ProductCard({ product }) {
  return (
    <Box>
      <Card elevation={3}>
        {/* <CardHeader
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
        /> */}
        <Link to={`/product/${product.id}`}>
          <CardContent
            style={{
              backgroundColor: "#caa6ab",
              color: "#344e6f",
            }}
          >
            <Typography
              variant={"h5"}
              noWrap={true}
              style={{
                fontFamily: "'Lobster Two', cursive",
                fontSize: "1.8rem",
                paddingTop: 0,
              }}
            >
              {product.name}
            </Typography>
          </CardContent>
          <Paper elevation={3}>
            <CardMedia
              style={{ height: 0, paddingTop: "135%" }}
              image={`${product.featured_image}`}
            />
          </Paper>
          <CardContent
            style={{
              backgroundColor: "#caa6ab",
              color: "#344e6f",
            }}
          >
            <Typography
              align="right"
              variant={"subtitle1"}
              style={{
                fontSize: "1.3rem",
                paddingTop: 0,
              }}
            >{`$${product.price}`}</Typography>
          </CardContent>
        </Link>
      </Card>
    </Box>
  );
}
