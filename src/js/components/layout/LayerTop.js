import React from "react";
import { IndexLink, Link } from "react-router";

export default class LayerTop extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    console.log(this.props);
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <div id="layer-top">
        <a href="#" class="btn" id="hamburger"></a>
        <a href="#" class="btn" id="scroll"></a>
        <div class="wxh">Current window dimensions are: <em>{this.props.width}</em> x <em>{this.props.height}</em></div>
      </div>
    );
  }
}
