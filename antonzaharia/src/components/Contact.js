import React from "react";
import { Link } from 'react-router-dom'
import {useSpring, animated } from 'react-spring'

export default function Contact({ close }) {
  const props = useSpring({
		config: { duration: 250 },
		from: { opacity: 0 },
		to: {
		  opacity: 1
		}
	  });
  return (
    <animated.article id="contact" style={props}>
      <h2 className="major">Contact</h2>
      <span><Link to="/" onClick={close} className="close"><i className="fa fa-times-circle" aria-hidden="true"></i></Link></span>
      <p><a className="contact-btn" href="tel:+447367111009"><i class="fas fa-phone"></i> Call (UK number)</a></p><br />
      <p><a className="contact-btn" href="mailto:zahariaanton95@gmail.com"><i class="far fa-envelope"></i> Send email</a></p><br />
      <p><a className="contact-btn" href="https://m.me/Zaharia.Anton/"><i class="fab fa-facebook-f"></i>&nbsp; Message on Facebook</a></p><br />
      <p><a className="contact-btn" href="slack://user?team=T02MD9XTF&id=U015HAMMTK4"><i class="fab fa-slack"></i> Message on Slack</a></p><br />
    </animated.article>
  );
}