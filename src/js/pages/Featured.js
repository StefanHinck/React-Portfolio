import React from "react";



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
      <div class="">
        <h1>Featured</h1>
      </div>
    );
  }
}
