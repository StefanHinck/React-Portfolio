import React from "react";
import ReactDOM from "react-dom";

import Slider from "../components/Slider";

import "./featured.scss";

export default class Featured extends React.Component {

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {

    return (
      <div class="wrapper">
        <Slider />
      </div>
    );
  }
}
