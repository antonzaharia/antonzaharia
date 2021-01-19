import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function ContentContainer() {
  return (
    <div className="container">
      <Nav className="nav-bar">
        <p className="logo">AntonZaharia.com</p>
        <Nav.Item>
          <Link className="nav-link">About</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link">Projects</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link">Blog</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link">Contact</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
