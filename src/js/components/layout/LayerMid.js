import React from "react";
import ReactTransitionGroup from 'react-addons-transition-group';
import { IndexLink, Link } from "react-router";


export default class LayerMid extends React.Component {
  constructor() {
    super()
  }

  toggleSidebar() {
    var state = !this.props.sidebar;
    this.props.updateSidebar(state);
  }

  componentDidMount() {
    this.props.closeSidebar();
  }


  render() {
    var windowWidth = this.props.windowWidth;
    var windowHeight = this.props.windowHeight;

    const { location } = this.props;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const bootstrapClass = location.pathname.match(/^\/bootstrap-elements/) ? "active" : "";

    return (

      <div id="layer-mid" style={{width: windowWidth + 'px', height: windowHeight + 'px'}}>

        <div id="sidebar" style={{height: windowHeight + 'px'}}>
          <ul>
            <li class={featuredClass}>
              <IndexLink to="/" onClick={this.toggleSidebar.bind(this)}>Featured</IndexLink>
            </li>
            <li class={archivesClass}>
              <Link to="archives" onClick={this.toggleSidebar.bind(this)}>Archives</Link>
            </li>
            <li class={settingsClass}>
              <Link to="settings" onClick={this.toggleSidebar.bind(this)}>Settings</Link>
            </li>
            <li class={bootstrapClass}>
              <Link to="bootstrap-elements" onClick={this.toggleSidebar.bind(this)}>Bootstrap Elements</Link>
            </li>
          </ul>
          <div id="sidebar-logo">ReBuild</div>
        </div>

        <div id="main" style={{width: windowWidth + 'px', height: windowHeight + 'px'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
