import React from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./project.scss";

export default class Project extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillAppear() {
    console.log('componentWillAppear');
  }
  componentDidAppear() {
    console.log('componentDidAppear');
  }
  componentWillEnter() {
    console.log('componentWillEnter');
  }
  componentDidEnter() {
    console.log('componentDidEnter');
  }
  componentWillLeave() {
    console.log('componentWillLeave');
  }
  componentDidLeave() {
    console.log('componentDidLeave');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {

    return (

      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <div class="project">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <h1>Project Page</h1>
              </div>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>

    );
  }
}
