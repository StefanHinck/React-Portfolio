import React from "react";
import { Link } from "react-router";


import Nav from "../components/layout/Header";
import Footer from "../components/layout/Footer";

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
      marginTop: "52px"
    };

    return (
      <div>

        <Nav location={location} width={this.state.windowWidth} height={this.state.windowHeight} />

        <div  style={containerStyle}>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                {this.props.children}
                <div>Current window dimensions are: {this.state.windowWidth} x {this.state.windowHeight} </div>
              </div>
            </div>
          </div>
        </div>

        <Footer width={this.state.windowWidth} height={this.state.windowHeight} />

      </div>
    );
  }
}
