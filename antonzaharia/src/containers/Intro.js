import React from "react";
import { Link } from 'react-router-dom'
import pic01 from "../images/pic01.jpg";

export default function Intro({ close }) {
  return (
    <article id="intro">
      <h2 className="major">Intro</h2>
	  <span><Link to="/" onClick={close} className="close"><i className="fa fa-times-circle" aria-hidden="true"></i></Link></span>
      <span className="image main">
        <img src={pic01} alt="" />
      </span>
      <p>
        Hey! My name is Anton, and I am pleased that you took the time to visit
        my website.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
        porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
        ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit
        amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla
        in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. In non lorem sit
        amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
        vehicula.
      </p>
    </article>
  );
}
