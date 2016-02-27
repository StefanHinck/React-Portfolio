import React from "react";
import Slider from "react-slick";


export default class SlickSlider extends React.Component {

  render() {
    var settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true
    };

    return (
      <Slider settings={settings}>
        <div><h3>11111</h3></div>
        <div><h3>22222</h3></div>
        <div><h3>33333</h3></div>
        <div><h3>44444</h3></div>
        <div><h3>55555</h3></div>
        <div><h3>66666</h3></div>
      </Slider>
    );
  }
}
