import React from 'react'
import Intro from './Intro'
import Head from '../components/Head'

class Header extends React.Component {

    render () {return (
        <>
        <header id="header">
        <Head />
        <nav>
            <ul>
                <li><a href="#intro">Intro</a></li>
				<li><a href="#work">Work</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <div id='main'>
        <Intro />
    </div>
    </>
    )}
}
export default Header