import React from "react";
import { IndexLink, Link } from "react-router";

import "./featured.scss";

export default class Featured extends React.Component {

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {

    return (
        <div class="wrapper">
          <div id="" ref="">
            <div class="section" id="section0">
              <h1>PROJECT 1</h1>
              <Link to="/project">Project Page</Link>
            </div>
            <div class="section" id="section1">
              <h1>PROJECT 2</h1>
              <Link to="/project">Project Page</Link>
            </div>
            <div class="section" id="section2">
              <h1>PROJECT 3</h1>
              <Link to="/project">Project Page</Link>
            </div>
          </div>
        </div>
    );
  }
}
