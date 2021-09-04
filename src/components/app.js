import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./navigation/navigation";
import Home from "./pages/home";
import About from "./pages/about";
import ProductDetail from "./pages/product-detail";
import InPerson from "./pages/shop-in-person";
import ShopOnline from "./pages/shop-online";
import Featured from "./featured-products";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>JoMo and Company</h1>
        <BrowserRouter>
          <div>
            {/* <Navigation /> */}
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/shop-online" component={ShopOnline} />

              <Route path="/in-person" component={InPerson} />

              <Route path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
