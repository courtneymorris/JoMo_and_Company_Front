import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Grid, Typography } from "@material-ui/core";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductSidebarList = (props) => {
  const productList = props.data.map((product) => {
    return (
      <ImageList style={{ width: "100%", height: "auto" }} key={product.id}>
        <ImageListItem>
          <img
            src={product.featured_image}
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <ImageListItemBar
            title={product.name}
            position="bottom"
            actionIcon={
              <Grid container>
                <Grid item>
                  <IconButton onClick={() => props.handleDeleteClick(product)}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "hotpink" }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton onClick={() => props.handleEditClick(product)}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ color: "hotpink" }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            }
          />
        </ImageListItem>
      </ImageList>
    );
  });
  return <div className="product-sidebar-list-wrapper">{productList}</div>;
};

export default ProductSidebarList;
