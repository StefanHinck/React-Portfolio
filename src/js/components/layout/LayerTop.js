import React from "react";
import { IndexLink, Link } from "react-router";

export default class LayerTop extends React.Component {
  constructor() {
    super()

  }

  toggleSidebar() {
    var state = !this.props.sidebar;
    this.props.updateSidebar(state);
  }


  render() {

    return (
      <div id="layer-top">
        <a class="btn" id="hamburger" onClick={this.toggleSidebar.bind(this)}><span></span><span></span><span></span></a>
        <div class="wxh">Current window dimensions are: <em>{this.props.windowWidth}</em> x <em>{this.props.windowHeight}</em></div>
      </div>
    );
  }
}
