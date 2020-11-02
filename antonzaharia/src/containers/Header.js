import React from 'react'
import Intro from './Intro'
import Head from '../components/Head'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: true,
            intro: false
        }
    }
    showIntro = (event) => {
        event.preventDefault()
        this.setState({
            header: false,
            intro: true
        })
    }

    render () {return (
        <>
        <header id="header">

            <a href="/">HOME</a>
        
        {this.state.header ? <Head /> : ""}
                
        {this.state.intro ? <div id="main"><Intro /></div> : ""}
        <nav>
            <ul>
                <li><a href="" onClick={this.showIntro}>Intro</a></li>
				<li><a href="#work">Work</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <br/>
    </header>
    </>
    )}
}
export default Header