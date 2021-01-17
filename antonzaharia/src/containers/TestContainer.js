import React, { Component } from "react";
import gsap from "gsap";

export default class TestContainer extends Component {
  render() {
    return <div className="test">test</div>;
  }
  componentWillUnmount() {
    setTimeout(function () {
      gsap.to(".test", { opacity: 0, duration: 2 });
    }, 2000);
  }
}
