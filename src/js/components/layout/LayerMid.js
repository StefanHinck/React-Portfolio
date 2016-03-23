import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class LayerMid extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.closeSidebar();
  }

  maybeCSSTrans() {
    var location = this.props.location;

    if ( location.pathname === "/" || location.pathname === "/project" ) {
      return  <ReactCSSTransitionGroup
                component="div"
                class="content"
                transitionName="position"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}
              >
                {React.cloneElement(this.props.children, {
                  key: this.props.location.pathname
                })}
              </ReactCSSTransitionGroup>;
    } else {
      return <div class="content scroll">{this.props.children}</div>;
    }
  }

  render() {
    var windowWidth = this.props.windowWidth;
    var windowHeight = this.props.windowHeight;

    return (

      <div id="layer-mid" style={{width: windowWidth + 'px', height: windowHeight + 'px'}}>


            {this.maybeCSSTrans()}

      </div>
    );
  }
}
