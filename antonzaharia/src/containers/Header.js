import React from 'react'
import Head from '../components/Head'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    render () {return (
        <>
        <header id="header">
        <div className="logo">
            <span className="icon fa-gem"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>antonzaharia.com</h1>
                <p><i><cite>Obstacles are those frightful things you see when you take your eyes off your goal.</cite></i></p>
                <p>Henry Ford</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><Link to="/intro">Intro</Link></li>
				<li><a href="#work">Work</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </header>
    <div id='main'>
    </div>
    </>
    )}
}
export default Header