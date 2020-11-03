import React from "react";
import { Link } from 'react-router-dom'

export default function Contact({ close }) {
  return (
    <article id="contact">
      <h2 className="major">Contact</h2>
      <span><Link to="/" onClick={close} className="close"><i className="fa fa-times-circle" aria-hidden="true"></i></Link></span>
      <p><a href="mailto:zahariaanton95@gmail.com">Send email</a></p>
      <p><a href="https://m.me/Zaharia.Anton/">Message on Facebook</a></p>
      <p><a href="slack://user?team=T02MD9XTF&id=U015HAMMTK4">Message on Slack</a></p>
    </article>
  );
}
