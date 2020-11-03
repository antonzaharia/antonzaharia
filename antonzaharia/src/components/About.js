import React from 'react'
import { Link } from 'react-router-dom'

export default function About({ close }) {
    return (
        <article id="about">
			<h2 className="major">About</h2>
			<span><Link to="/" onClick={close} className="close"><i className="fa fa-times-circle" aria-hidden="true"></i></Link></span>
			<span className="image main"><img src="images/pic03.jpg" alt="" /></span>
			<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
		</article>
    )
}
