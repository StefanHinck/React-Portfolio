import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Archives extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionLeaveTimeout={500}>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 alert alert-success mock">

            </div>
            <div class="col-sm-6 alert alert-info mock">

            </div>
            <div class="col-sm-6 alert alert-danger mock">

            </div>
            <div class="col-sm-6 alert alert-success mock">

            </div>
            <div class="col-sm-6 alert alert-warning mock">

            </div>
            <div class="col-sm-6 alert alert-info mock">

            </div>
            <div class="col-sm-6 alert alert-danger mock">

            </div>
            <div class="col-sm-6 alert alert-success mock">

            </div>
            <div class="col-sm-6 alert alert-warning mock">

            </div>
            <div class="col-sm-6 alert alert-info mock">

            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
