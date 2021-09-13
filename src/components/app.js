import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBars,
  faHome,
  faShoppingCart,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./navigation/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import ProductDetail from "./pages/product-detail";
import Markets from "./pages/markets";
import Shop from "./pages/shop";
import NoMatch from "./pages/no-match";

import { AppContainer } from "./styled-components/container.style";

library.add(faHeart, faBars, faHome, faShoppingCart, faStore);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />

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
