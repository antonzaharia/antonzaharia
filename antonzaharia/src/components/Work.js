import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import movieApp from '../images/movie-app.png'
import tipjar from '../images/tipjar.png'
import prism from '../images/prism.png'
import planetary from '../images/planetary.png'
import hotwireAnimate from '../images/hotwire-animate.png'

export default function Work({ close }) {
  const props = useSpring({
    config: { duration: 250 },
    from: { opacity: 0, height: 20 },
    to: {
      opacity: 1,
      height: 'auto',
    },
  })
  return (
    <animated.article id="work" style={props}>
      <h2 className="major">Work</h2>
      <span>
        <Link to="/" onClick={close} className="close">
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </Link>
      </span>
      <h3>My Projects</h3>
      <div className="project">
        <div>
          <a className="link-project" href="https://radiant-anchorage-60075.herokuapp.com/" target="_blank">
            Live Website
          </a>{' '}
          and{' '}
          <a className="link-project" href="https://github.com/rails-hackathon/team-37" target="_blank">
            Github
          </a>{' '}
          for
        </div>
        <p className="long-p">
          Hotwire Animate (WIP) - a work in progress NPM package for adding drop in animations in Turbo Frames.
        </p>
        <img className="project-image" src={hotwireAnimate} alt="project screenshot" />
        <div className="right-notice">
          <span>Built in 48 hours - Rails hackathon</span>
        </div>
      </div>
      <hr />
      <div className="project">
        <div>
          <a className="link-project" href="https://planetary-19cc0.web.app" target="_blank">
            Live Website
          </a>{' '}
          and{' '}
          <a className="link-project" href="https://github.com/antonzaharia/planetary" target="_blank">
            Github
          </a>{' '}
          for
        </div>
        <p className="long-p">Planetary - mini NFT platform</p>
        <img className="project-image" src={planetary} alt="project screenshot" />
      </div>
      <hr />
      <div className="project">
        <div>
          <a className="link-project" href="https://prism-b75ae.web.app/" target="_blank">
            Live Website
          </a>{' '}
          and{' '}
          <a className="link-project" href="https://github.com/antonzaharia/prism" target="_blank">
            Github
          </a>{' '}
          for
        </div>
        <p className="long-p">
          Prism - a smart contract for a band's new album as a 100-copy limited edition with 20% of revenue going to charity.
        </p>
        <img className="project-image" src={prism} alt="project screenshot" />
      </div>
      <hr />
      <div className="project">
        <div>
          <a className="link-project" href="https://tipjar-d330e.web.app/" target="_blank">
            Live Website
          </a>{' '}
          and{' '}
          <a className="link-project" href="https://github.com/antonzaharia/tip-jar" target="_blank">
            Github
          </a>{' '}
          for
        </div>
        <p className="long-p">
          Crypto Tipjar - a super simple way to accept money without having to use PayPal, Stripe, or any other payment
          gateway.
        </p>
        <img className="project-image" src={tipjar} alt="project screenshot" />
      </div>
      <hr />
      <div className="project">
        <div>
          <a className="link-project" href="https://movie-app-ac360.web.app/" target="_blank">
            Live Website
          </a>{' '}
          and{' '}
          <a className="link-project" href="https://github.com/antonzaharia/movies-app" target="_blank">
            Github
          </a>{' '}
          for
        </div>
        <p className="long-p">Movie App - a simple React app tha loads latest movies information from a specific API.</p>
        <img className="project-image" src={movieApp} alt="project screenshot" />
      </div>
      <hr />
      <a className="link-project" href="https://raffle-frontend.web.app/" target="_blank">
        Live Website
      </a>{' '}
      and{' '}
      <a className="link-project" href="https://github.com/antonzaharia/raffle-app" target="_blank">
        Github
      </a>{' '}
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
      <a className="link-project" href="https://topz-215c8.firebaseapp.com/" target="_blank">
        Live Website
      </a>{' '}
      and{' '}
      <a className="link-project" href="https://github.com/antonzaharia/topz" target="_blank">
        Github
      </a>{' '}
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
      <a className="link-project" href="https://rgadbets.herokuapp.com/" target="_blank">
        Live Website
      </a>{' '}
      and{' '}
      <a className="link-project" href="https://github.com/antonzaharia/RGadgets" target="_blank">
        Github
      </a>{' '}
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
      <a className="link-project" href="https://github.com/antonzaharia/Food-Order" target="_blank">
        Github
      </a>{' '}
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
      <a className="link-project" href="https://github.com/antonzaharia/BestSellerBook" target="_blank">
        Github
      </a>{' '}
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
  )
}
