import React from "react";
import { Link } from "react-router-dom";
import pic01 from "../images/pic01.jpg";
import {useSpring, animated } from 'react-spring'

    

export default function Intro({ close }) {
  const props = useSpring({
    config: { duration: 250 },
    from: { opacity: 0 },
    to: {
      opacity: 1
    }
  });
  return (
    <animated.article id="intro" style={props}>
      <h2 className="major">Intro</h2>
      <span>
        <Link to="/" onClick={close} className="close">
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </Link>
      </span>
      <span className="image main">
        <img src={pic01} alt="" />
      </span>
      <p>
        Hey! My name is Anton, and I am pleased that you took the time to visit
        my website.
      </p>
      <p>
        I am experienced in Ruby on Rails and JavaScript-based programming and a
        background in multi-drop delivery services, on-site surveying, and
        restaurant management. Possess strong communication, decision-making,
        and problem-solving skills to deliver great customer service, as well as
        excellent organizing and planning skills that enable adaptability and
        help to provide the first-class service and meet deadlines.
      </p>
    </animated.article>
  );
}
