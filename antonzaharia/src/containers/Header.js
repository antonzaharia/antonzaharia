import React from 'react'

export default function Header() {
    return (
        <header id="header">
        <div className="logo">
            <span className="icon fa-gem"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>antonzaharia.com</h1>
                <p><blockquote><cite>Obstacles are those frightful things you see when you take your eyes off your goal.</cite></blockquote></p>
                <p>Henry Ford</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#intro">Intro</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}
