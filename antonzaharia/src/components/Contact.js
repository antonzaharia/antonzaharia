import React from "react";
import { Link } from 'react-router-dom'

export default function Contact({ close }) {
  return (
    <article id="contact">
      <h2 className="major">Contact</h2>
      <span><Link to="/" onClick={close} className="close"><i className="fa fa-times-circle" aria-hidden="true"></i></Link></span>
      <form>
        <div className="fields">
          <div className="field half">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="primary" />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
      </form>
    </article>
  );
}
