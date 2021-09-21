import React, { Component } from "react";
import {
  Button,
  Container,
  Typography,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
} from "@material-ui/core";

import loading from "../../../static/assets/loading.gif";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      error: "",
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.passwordConfirm === ""
    ) {
      this.setState({ error: "Please fill out all fields" });
    } else if (this.state.password != this.state.passwordConfirm) {
      this.setState({ error: "Passwords do not match!" });
    } else {
      this.setState({
        loading: true,
        error: "",
      });

      fetch("https://api-jomoandco.herokuapp.com/customer/add", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          this.setState({ loading: false });
        })
        .catch((error) => {
          console.log("Error adding user", error);
          this.setState({
            loading: false,
            error: "An error occurred. Please try again later.",
          });
        });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={this.handleChange}
              value={this.state.email}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              label="Repeat Password"
              id="passwordConfirm"
              onChange={this.handleChange}
              value={this.state.passwordConfirm}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              disabled={this.state.loading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Log in."}
                </Link>
              </Grid>
            </Grid>
            <p>{this.state.error}</p>
            {this.state.loading ? (
              <img src={loading} />
            ) : (
              <div className="spacer" />
            )}
          </Box>
        </Box>
      </Container>
    );
  }
}
