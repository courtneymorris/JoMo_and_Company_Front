import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import red from "@material-ui/core/colors/red";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div>
      <Card>
        <CardMedia
          style={{ height: 0, paddingTop: "150%" }}
          image={`${product.featured_image}`}
        />
        <CardContent>
          <Typography variant={"subtitle1"}>{product.name}</Typography>
          <Typography variant={"subtitle2"}>{`$${product.price}`}</Typography>
        </CardContent>
        <CardHeader
          action={
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          }
        />
      </Card>
    </div>
  );
}
