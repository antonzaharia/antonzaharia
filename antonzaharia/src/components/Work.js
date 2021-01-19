import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Work({ close }) {
  const props = useSpring({
    config: { duration: 250 },
    from: { opacity: 0 },
    to: {
      opacity: 1,
    },
  });
  return (
    <animated.article id="work" style={props}>
      <h2 className="major">Work</h2>
      <span>
        <Link to="/" onClick={close} className="close">
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </Link>
      </span>
      <h3>My Projects</h3>
      <a className="link-project" href="https://raffle-frontend.web.app/">
        Live Website
      </a>{" "}
      and{" "}
      <a
        className="link-project"
        href="https://github.com/antonzaharia/raffle-app"
      >
        Github
      </a>{" "}
      for
      <p>Raffle React based app with Ruby on Rails API backend</p>
      <iframe
        title="raffle"
        className="video"
        src="https://www.youtube.com/embed/jwR70uubcGU"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
      <hr />
      <a className="link-project" href="https://topz-215c8.firebaseapp.com/">
        Live Website
      </a>{" "}
      and{" "}
      <a
        className="link-project"
        href="https://github.com/antonzaharia/RGadgets"
      >
        Github
      </a>{" "}
      for
      <p>TOPZ - SPA Javascript and Ruby on Rails</p>
      <iframe
        title="rgadgets"
        className="video"
        src="https://www.youtube.com/embed/22TECnIjVGg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <hr />
      <a className="link-project" href="https://rgadbets.herokuapp.com/">
        Live Website
      </a>{" "}
      and{" "}
      <a className="link-project" href="https://github.com/antonzaharia/topz">
        Github
      </a>{" "}
      for
      <p>RGadgets Shop Ruby on Rails Web App</p>
      <iframe
        title="topz"
        className="video"
        src="https://www.youtube.com/embed/xGwEhybjX5w"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
      <hr />
      <a
        className="link-project"
        href="https://github.com/antonzaharia/Food-Order"
      >
        Github
      </a>{" "}
      for
      <p>Food Order Sinatra Web App</p>
      <iframe
        title="food-order"
        className="video"
        src="https://www.youtube.com/embed/riNRMjF2lCk"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
      <hr />
      <a
        className="link-project"
        href="https://github.com/antonzaharia/BestSellerBook"
      >
        Github
      </a>{" "}
      for
      <p>Best Seller CLI</p>
      <iframe
        title="best-seller"
        className="video"
        src="https://www.youtube.com/embed/m8LkFBfkMSA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <hr />
    </animated.article>
  );
}
