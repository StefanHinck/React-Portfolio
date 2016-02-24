import React from "react";
import { Link } from "react-router";
import classNames from "classnames";


import LayerTop from "../components/layout/LayerTop";
import LayerMid from "../components/layout/LayerMid";

export default class Layout extends React.Component {

  constructor() {
    super()
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      sidebarVisible: true
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }



  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  updateSidebar(state){
    this.setState ({
      sidebarVisible: state
    });
  }



  render() {
    const { location } = this.props;
    const { children } = this.props;

    var stateClasses = classNames({
      'show-sidebar': this.state.sidebarVisible,
      'show-class': true,
      'no-class': false
    });

    return (
      <div id="layer-all" class={stateClasses}>

        <LayerTop sidebar={this.state.sidebarVisible} updateSidebar={this.updateSidebar.bind(this)} windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight} />

        <LayerMid children={children} location={location} sidebar={this.state.sidebarVisible} updateSidebar={this.updateSidebar.bind(this)} windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight} />

      </div>
    );
  }
}
