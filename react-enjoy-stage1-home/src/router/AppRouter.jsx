import React, { Component } from 'react';
import { Route,HashRouter,Switch } from "react-router-dom"

import Layout from "../container/Layout"
import SubRouter from "./SubRouter"

class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
          {/* <Route path="/" component={ Layout }></Route> */}
          <Layout path="/">
            <SubRouter />
          </Layout>
      </HashRouter>
    );
  }
}

export default AppRouter;
