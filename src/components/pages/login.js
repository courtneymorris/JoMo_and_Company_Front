import React, { Component } from "react";
import Cookies from "js-cookie";
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

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.email === "" || this.state.password === "") {
      this.setState({ error: "Please fill out all fields" });
    } else {
      this.setState({
        loading: true,
        error: "",
      });

      fetch("http://127.0.0.1:5000/customer/verification", {
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

          if (data === "Account NOT Verified") {
            this.setState({ error: "Invalid email or password " });
          } else {
            this.props.handleSetCustomer(data);
            Cookies.set("email", this.state.email);
            this.props.history.push("/");
          }
        })
        .catch((error) => {
          console.log("Error logging in", error);
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
            Log in
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
              //   type="password"
              id="password"
              autoComplete="password"
              onChange={this.handleChange}
              value={this.state.password}
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
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <p>{this.state.error}</p>
            {this.state.loading ? (
              <img src={loading} />
            ) : (
              <div className="spacer" />
            )}
            <p>{this.state.error}</p>
          </Box>
        </Box>
      </Container>
    );
  }
}
