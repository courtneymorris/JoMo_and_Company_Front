import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  IconButton,
  ButtonGroup,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Container,
} from "@material-ui/core";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ProductSidebarList(props) {
  return (
    <Container>
      <Grid container spacing={1}>
        {props.data.map((product) => (
          <Grid item key={product.id} xs={4} sm={3}>
            <Card
              key={product.id}
              style={{
                backgroundColor: "#d38e9d",
                paddingBottom: "0px",
              }}
            >
              <CardContent>
                <Typography variant="body1" noWrap>
                  {product.name}
                </Typography>
              </CardContent>
              <CardMedia
                style={{ height: 0, paddingTop: "135%" }}
                image={`${product.featured_image}`}
              />
              <CardHeader
                style={{
                  backgroundColor: "#d38e9d",
                  paddingBottom: "0px",
                  justifyContent: "center",
                }}
                action={
                  <Box>
                    <IconButton
                      onClick={() => props.handleDeleteClick(product)}
                    >
                      <FontAwesomeIcon
                        padding="0"
                        icon={faTrash}
                        style={{
                          color: "#355070",
                          fontSize: "1rem",
                        }}
                      />
                    </IconButton>

                    <IconButton onClick={() => props.handleEditClick(product)}>
                      <FontAwesomeIcon
                        padding="0"
                        icon={faEdit}
                        style={{ color: "#355070", fontSize: "1rem" }}
                      />
                    </IconButton>
                  </Box>
                }
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
