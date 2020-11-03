import React from "react";
import { Link } from "react-router-dom";

export default function About({ close }) {
  return (
    <article id="about">
      <h2 className="major">About</h2>
      <span>
        <Link to="/" onClick={close} className="close">
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </Link>
      </span>
      <span className="image main">
        <img src="images/pic03.jpg" alt="" />
      </span>
      <p>
        
      </p>
    </article>
  );
}
