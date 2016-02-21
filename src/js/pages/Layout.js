import React from "react";
import { Link } from "react-router";


import LayerTop from "../components/layout/LayerTop";

export default class Layout extends React.Component {

  constructor() {
    super()
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
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

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "0px"
    };

    return (
      <div id="layer-all">

        <LayerTop location={location} width={this.state.windowWidth} height={this.state.windowHeight} />

        <div id="layer-mid">
          {this.props.children}
        </div>

      </div>
    );
  }
}
