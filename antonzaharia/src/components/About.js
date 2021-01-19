import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function About({ close }) {
  const props = useSpring({
    config: { duration: 350 },
    from: { opacity: 0, height: 20 },
    to: { opacity: 1, height: 1100 },
  });
  return (
    <animated.article id="about" style={props}>
      <h2 className="major">About</h2>
      <span>
        <Link to="/" onClick={close} className="close">
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </Link>
      </span>
      <span className="image main">
        <img src="images/pic03.jpg" alt="" />
      </span>
      <p>
        Even since I was a kid I wanted to work and make my own money because I
        was born in a modest family in Romania with “enough” shortages.
      </p>
      <p>
        Doing a couple of “jobs”, I realized that doing something just for money
        is not that jolly. I tried to figure out something that I love to do
        and, of course, to find a job that is about that thing. Surprising, it
        was hard!
      </p>
      <p>
        When I almost quit, going through sports, driving, cooking, video
        editing I found out about coding. I heard something before about it, but
        in my mind was that I need years and years of learning to become
        successful. Being at the end of my high school I did not consider coding
        a career, because I came to London and I had to support myself. After
        almost 6 years of watching youtube tutorials and following free online
        courses, I realized that this is that “something” I was searching for,
        at my 18’s.
      </p>
      <p>
        Spending hours of my free time learning, without any interest, proved to
        me that this has to be my career. And, here am I, happy and proud of
        what I am doing.
      </p>

      <p>For more information about me and what I do visit my blog:</p>
      <a href="https://antonzaharia.medium.com/">Anton Zaharia on Medium</a>
    </animated.article>
  );
}
