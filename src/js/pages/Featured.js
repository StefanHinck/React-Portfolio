import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { IndexLink, Link } from "react-router";

import "./featured.scss";

export default class Featured extends React.Component {

  componentDidMount() {
    var $ = require('jquery');
    require('fullpage.js');

    $("#fullpage").fullpage();
    $("body").addClass('main-fullpage');
  }
  componentWillUnmount() {
    var $ = require('jquery');
    require('fullpage.js');

    $("body").removeClass('main-fullpage');
    $.fn.fullpage.destroy('all');
  }

  render() {

    return (
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <div id="fullpage" ref="fullpage">
            <div class="section" id="section0">
              <h1>BACKGROUND 1</h1>
              <Link to="project">Project Page</Link>
            </div>
            <div class="section" id="section1">
              <h1>BACKGROUND 2</h1>
              <Link to="project">Project Page</Link>
            </div>
            <div class="section" id="section2">
              <h1>BACKGROUND 3</h1>
              <Link to="project">Project Page</Link>
            </div>
          </div>
      </ReactCSSTransitionGroup>
    );
  }
}
