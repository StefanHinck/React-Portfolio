import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { IndexLink, Link } from "react-router";

import "./featured.scss";

export default class Featured extends React.Component {

  


  render() {

    return (
        <div class="wrapper">
          <div id="fullpage" ref="fullpage">
            <div class="section" id="section0">
              <h1>BACKGROUND 1</h1>
              <Link to="/project">Project Page</Link>
            </div>
            <div class="section" id="section1">
              <h1>BACKGROUND 2</h1>
              <Link to="/project">Project Page</Link>
            </div>
            <div class="section" id="section2">
              <h1>BACKGROUND 3</h1>
              <Link to="/project">Project Page</Link>
            </div>
          </div>
        </div>
    );
  }
}
