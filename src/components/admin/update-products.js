import React, { Component } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class UpdateProducts extends Component {
  constructor(props) {
    super();

    this.state = {
      category: "Scrunchies",
      collection: "Classic",
      name: "",
      description: "",
      price: 0,
      featured_image: "",
      images: [],
    };
  }

  render() {
    return (
      <Container>
        <Grid container>
          <Card>
            <CardContent>
              <CardActions>
                <Button size="medium">
                  <NavLink exact to="/admin" activeClassName="nav-link-active">
                    Back to Admin Home
                  </NavLink>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    );
  }
}
