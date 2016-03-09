import React from "react";
import { IndexLink, Link } from "react-router";
var Slick = require('react-slick');

import "./slider.scss";

export default class Slider extends React.Component {

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <div class="slider">
          <Slick {...settings}>
            <div class="section" id="section0">
              <h1>PROJECT 1</h1>
              <Link to="/project">View Project --></Link>
            </div>
            <div class="section" id="section1">
              <h1>PROJECT 2</h1>
              <Link to="/project">View Project Page --></Link>
            </div>
            <div class="section" id="section2">
              <h1>PROJECT 3</h1>
              <Link to="/project">View Project Page --></Link>
            </div>
          </Slick>
        </div>
    );
  }
}
