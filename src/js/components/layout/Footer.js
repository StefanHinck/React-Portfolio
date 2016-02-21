import React from "react";
import { IndexLink, Link } from "react-router";

export default class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p>&copy; The footer</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
