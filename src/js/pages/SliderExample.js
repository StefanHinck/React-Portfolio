import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import SlickSlider from "../components/Slider";

export default class Featured extends React.Component {

  componentWillMount() {
    console.log('Component is about to mount')
  }
  componentDidMount() {
    console.log('Component has now mounted!')
  }
  componentWillUnmount() {
    console.log('Component will now un-mount, goodbye')
  }

  render() {

    return (
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500}>
        <h1>Slider Example</h1>
        <SlickSlider />
      </ReactCSSTransitionGroup>
    );
  }
}
