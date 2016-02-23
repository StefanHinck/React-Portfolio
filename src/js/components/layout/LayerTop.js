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
    console.log(this.props);
    return (
      <div id="layer-top">
        <a href="#" class="btn" id="hamburger" onClick={this.toggleSidebar.bind(this)}></a>
        <a href="#" class="btn" id="scroll"></a>
        <div class="wxh">Current window dimensions are: <em>{this.props.windowWidth}</em> x <em>{this.props.windowHeight}</em></div>
      </div>
    );
  }
}
