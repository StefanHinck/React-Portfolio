import React from "react";
import { IndexLink, Link } from "react-router";
import classNames from "classnames";

import "./layer-top.scss";

export default class LayerTop extends React.Component {
  constructor() {
    super()

  }

  toggleSidebar() {
    var state = !this.props.sidebar;
    this.props.updateSidebar(state);
  }

  render() {

    const { location } = this.props;

    var stateClasses = classNames({
      "back-visible" : location.pathname.match(/^\/project/)
    });

    return (
      <div id="layer-top" class={stateClasses}>
        <a class="ui-element" id="hamburger" onClick={this.toggleSidebar.bind(this)}><span></span><span></span><span></span></a>
        <Link class="ui-element" id="back" to="/"><span></span><span></span></Link>
        <div class="wxh">Current window dimensions are: <em>{this.props.windowWidth}</em> x <em>{this.props.windowHeight}</em></div>
      </div>
    );
  }
}
