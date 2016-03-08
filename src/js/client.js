import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "./vendor/bootstrap-without-jquery";
import "../style/main.scss";

import BootstrapElements from "./pages/BootstrapElements";
import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Project from "./pages/Project";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured} />
      <Route path="bootstrap-elements" component={BootstrapElements} />
      <Route path="archives" component={Archives} />
      <Route path="settings" component={Settings} />
      <Route path="project" component={Project} />
    </Route>
  </Router>,
app);
