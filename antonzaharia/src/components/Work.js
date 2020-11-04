import React from 'react'
import { Link } from 'react-router-dom'
import {useSpring, animated } from 'react-spring'

export default function Work({ close }) {
	const props = useSpring({
		config: { duration: 250 },
		from: { opacity: 0 },
		to: {
		  opacity: 1
		}
	  });
    return (
        <animated.article id="work" style={props}>
			<h2 className="major">Work</h2>
			<span><Link to="/" onClick={close} className="close"><i className="fa fa-times-circle" aria-hidden="true"></i></Link></span>
			<span className="image main"><img src="images/pic02.jpg" alt="" /></span>
			<h3>My Projects</h3>
			
			<a className="link-project" href="https://www.youtube.com/watch?v=ywZg1YtcpIo&ab_channel=AntonZaharia">Demo Video</a> and <a className="link-project" href="https://github.com/antonzaharia/raffle-app">Github</a> for
			<p>Raffle React based app with Ruby on Rails API backend</p>
			<iframe title="raffle" className="video" src="https://www.youtube.com/embed/ywZg1YtcpIo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

			<hr />
			<a className="link-project" href="https://www.youtube.com/watch?v=xGwEhybjX5w&t=74s&ab_channel=AntonZaharia">Demo Video</a> and <a className="link-project" href="https://github.com/antonzaharia/RGadgets">Github</a> for
			<p>TOPZ - SPA Javascript and Ruby on Rails</p>
			<iframe title="rgadgets" className="video" src="https://www.youtube.com/embed/AXnkMYYpjBA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

			<hr />
			
			<a className="link-project" href="https://www.youtube.com/watch?v=AXnkMYYpjBA&ab_channel=AntonZaharia">Demo Video</a> and <a className="link-project" href="https://github.com/antonzaharia/topz">Github</a> for
			<p>RGadgets Shop Ruby on Rails Web App</p>
			<iframe title="topz" className="video" src="https://www.youtube.com/embed/xGwEhybjX5w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

			<hr />
			<a className="link-project" href="https://www.youtube.com/watch?v=riNRMjF2lCk&t=53s&ab_channel=AntonZaharia">Demo Video</a> and <a className="link-project" href="https://github.com/antonzaharia/Food-Order">Github</a> for
			<p>Food Order Sinatra Web App</p>
			<iframe title="food-order" className="video" src="https://www.youtube.com/embed/riNRMjF2lCk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

			<hr />
			<a className="link-project" href="https://www.youtube.com/watch?v=m8LkFBfkMSA&t=28s&ab_channel=AntonZaharia">Demo Video</a> and <a className="link-project" href="https://github.com/antonzaharia/BestSellerBook">Github</a> for
			<p>Best Seller CLI</p>
			<iframe title="best-seller" className="video" src="https://www.youtube.com/embed/m8LkFBfkMSA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<hr />
		</animated.article>
    )
}

