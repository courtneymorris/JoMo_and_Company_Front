import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

export default class Admin extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Card raised>
              <CardContent style={{ backgroundColor: "purple" }}>
                <CardActions>
                  <Button size="large">
                    <NavLink
                      exact
                      to="/product-manager"
                      activeClassName="nav-link-active"
                    >
                      <Typography>Update Products</Typography>
                    </NavLink>
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
