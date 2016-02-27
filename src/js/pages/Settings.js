import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Settings extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500}>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>Settings</h1>
          </div>
        </div>
      </div>
      </ReactCSSTransitionGroup>
    );
  }
}
