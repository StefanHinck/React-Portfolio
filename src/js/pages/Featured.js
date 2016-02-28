import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";




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
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>Featured</h1>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
