import React from "react";
import { IndexLink, Link } from "react-router";

export default class LayerMid extends React.Component {
  constructor() {
    super()
  }




  render() {
    var windowWidth = this.props.windowWidth;
    var windowHeight = this.props.windowHeight;


    return (
      <div id="layer-mid" style={{width: windowWidth + 'px', height: windowHeight + 'px'}}>

        <div id="sidebar" style={{height: windowHeight + 'px'}}>
          Sidebar
        </div>

        <div id="main" style={{height: windowHeight + 'px'}}>
          {this.props.children}
          Hello from inside LayerMid!!!
        </div>

      </div>
    );
  }
}
