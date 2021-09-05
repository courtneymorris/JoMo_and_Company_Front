import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import ProductDetail from "./pages/product-detail";
import InPerson from "./pages/shop-in-person";
import ShopOnline from "./pages/shop-online";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/about" component={About} />

              <Route path="/shop" component={ShopOnline} />

              <Route path="/in-person" component={InPerson} />

              <Route exact path="/product/:slug" component={ProductDetail} />

              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
