import React from 'react'
import {useSpring, animated } from 'react-spring'

export default function Head() {
    const props = useSpring({
        from: { opacity: "0.5", height: "0px"},
        to: { opacity: "1", height: "250px"},
        
    })
    return (
        <>
        <div className="logo" >
            <span className="icon fa-gem"></span>
        </div>
        <animated.div className="content" style={props}>
            <div className="inner">
                <h1>antonzaharia.com</h1>
                <p><i><b>|</b> <cite>Obstacles are those frightful things you see when you take your eyes off your goal.</cite></i></p>
                <p>Henry Ford</p>
            </div>
        </animated.div>
        </>
    )
}
