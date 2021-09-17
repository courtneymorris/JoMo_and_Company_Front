import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import {
  FontAwesomeIcon,
  FortAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBars,
  faHome,
  faShoppingCart,
  faStore,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./navigation/navbar";
import Home from "./pages/home";
import LogIn from "./pages/login";
import About from "./pages/about";
import ProductDetail from "./pages/product-detail";
import Markets from "./pages/markets";
import Shop from "./pages/shop";
import NoMatch from "./pages/no-match";

import Admin from "./admin/admin-home";
import ProductManager from "./admin/product-manager";

import { AppContainer } from "./styled-components/container.style";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";

library.add(faHeart, faBars, faHome, faShoppingCart, faStore, faEdit, faTrash);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: false,
      customer: {},
      loading: true,
      error: "",
    };

    this.handleSetCustomer = this.handleSetCustomer.bind(this);
    this.handleSetError = this.handleSetError.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    if (Cookies.get("email")) {
      fetch(`http://127.0.0.1:5000/customer/get/${Cookies.get("email")}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ customer: data, loading: false });
        })
        .catch((error) => {
          console.log("Error getting customer data", error);
          this.setState({
            error: "An error occurred... Please try again later.",
          });
        });
    } else if (Cookies.get("username")) {
      console.log("admin");
    } else {
      this.setState({ loading: false });
    }
  }

  handleSetCustomer(customerData) {
    this.setState({
      customer: customerData,
    });
  }

  handleSetError(errorData) {
    this.setState({ error: errorData });
  }

  handleLogout() {
    Cookies.remove("email");
    this.setState({ customer: {} });
  }

  render() {
    return (
      <AppContainer>
        {this.state.customer.id ? (
          <h3 onClick={this.handleLogout()}>
            <ExitToAppRounded />
          </h3>
        ) : null}
        <Router>
          <Navbar />
          <Switch>
            <Route path="/admin" component={Admin} />

            <Route path="/product-manager" component={ProductManager} />

            <Route exact path="/" component={Home} />

            <Route
              path="/login"
              render={(props) => (
                <LogIn {...props} handleSetCustomer={this.handleSetCustomer} />
              )}
            />

            <Route path="/shop" component={Shop} />

            <Route path="/about" component={About} />

            <Route path="/markets" component={Markets} />

            <Route exact path="/product/:slug" component={ProductDetail} />

            <Route component={NoMatch} />
          </Switch>
        </Router>
      </AppContainer>
    );
  }
}
