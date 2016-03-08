import React from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";
import { IndexLink, Link } from "react-router";

import "./project.scss";

export default class Project extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    console.log('componentDidMount');
    var $ = require('jquery');
    $(".page").addClass("animate").delay(200).queue(function(){
      $(this).removeClass("animate");

    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  render() {

    var stateClasses = classNames({

    });

    return (
      <div class="wrapper">
        <div id="project" class="page">
          <section id="featured-section">
            <div class="container">
              <div class="row">
                <div class="col-xs-12">
                  <div class="featured">
                    <h1>BACKGROUND IMAGE</h1>
                    <Link class="ui-element" id="back" to="/"><span>sdg</span><span></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="intro-section">
            <div class="container">
              <div class="row">
                <div class="col-xs-12">
                <div class="page-wrap">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
