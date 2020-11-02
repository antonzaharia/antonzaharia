import React, { Component } from 'react'
import Header from './Header'
import Icons from './Icons'

export default class MainContainer extends Component {
    render() {
        return (
            <div id="wrapper">
                <Header />
                
                <Icons />
                <footer id="footer">
					<p className="copyright">&copy; antonzaharia.com</p>
				</footer>
            </div>
        )
    }
}
