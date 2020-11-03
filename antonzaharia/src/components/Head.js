import React from 'react'
import {useSpring, animated } from 'react-spring'

export default function Head() {
    const props = useSpring({
        transform: "scale(1)",
        from: { transform: "scale(0.5)"},
    })
    return (
        <>
        <animated.div className="logo" style={props}>
            <span className="icon fa-gem"></span>
        </animated.div>
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
