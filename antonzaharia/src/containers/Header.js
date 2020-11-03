import React from 'react'
import Intro from './Intro'
import Head from '../components/Head'
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: true,
            intro: false,
            work: false,
            about: false,
            contact: false
        }
    }
    closeAll = () => this.setState({header: false, intro: false, work: false, about: false, contact: false})
    showIntro = (event) => {
        event.preventDefault()
        this.closeAll()
        this.setState({intro: true, })
    }
    showWork = (event) => {
        event.preventDefault()
        this.closeAll()
        this.setState({work: true, })
    }
    showAbout = (event) => {
        event.preventDefault()
        this.closeAll()
        this.setState({about: true, })
    }
    showContact= (event) => {
        event.preventDefault()
        this.closeAll()
        this.setState({contact: true, })
    }

    render () {return (
        <>
        <header id="header">

            <a href="/">HOME</a>
        
        {this.state.header ? <Head /> : ""}
                
        {this.state.intro ? <div id="main"><Intro /></div> : ""}
        {this.state.work ? <div id="main"><Work /></div> : ""}
        {this.state.about ? <div id="main"><About /></div> : ""}
        {this.state.contact ? <div id="main"><Contact /></div> : ""}
        <nav>
            <ul>
                <li><a href="" onClick={this.showIntro}>Intro</a></li>
				<li><a href="" onClick={this.showWork}>Work</a></li>
				<li><a href="" onClick={this.showAbout}>About</a></li>
				<li><a href="" onClick={this.showContact}>Contact</a></li>
            </ul>
        </nav>
        <br/>
    </header>
    </>
    )}
}
export default Header