import React, { Component } from 'react';
import { Route,Switch } from "react-router-dom"

import Home from "../container/Home"
import Mine from "../container/Mine"
import Shop from "../container/Shop"
import Service from "../container/Service"
import NotFound from "../container/NotFound"

import City from "../container/City"
import Search from "../container/Search"
import Details from "../container/Details"
import Login from "../container/Login"

class SubRouter extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/shop" component={ Shop }></Route>
          <Route path="/service" component={ Service }></Route>
          <Route path="/mine" component={ Mine }></Route>
          <Route path="/city" component={ City }></Route>
          <Route path="/login/:router?" component={ Login }></Route>
          <Route path="/details/:goods_id" component={ Details }></Route>
          <Route path="/search/:keywords" component={ Search }></Route>
          <Route path="*" component={ NotFound }></Route>
      </Switch>
    );
  }
}

export default SubRouter;
