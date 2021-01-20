import gsap from "gsap";
import React from "react";
import { useSpring, animated } from "react-spring";
import resume from "./resume.pdf";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Resume() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const handleOnMouseMove = ({ clientX: x, clientY: y }) => {
    set({ xys: calc(x, y) });
    gsap.to(".download-btn", { opacity: 1, duration: 0.5 });
    gsap.to(".resume", { opacity: 0.8, duration: 0.5 });
  };
  const handleOnMouseLeave = () => {
    set({ xys: [0, 0, 1] });
    gsap.to(".download-btn", { opacity: 0, duration: 0.5 });
    gsap.to(".resume", { opacity: 1, duration: 0.5 });
  };
  const style = useSpring({
    config: { duration: 400 },
    from: { opacity: 0, height: 20 },
    to: {
      opacity: 1,
      height: "auto",
    },
  });

  return (
    <animated.a href={resume} className="container-cv" style={style}>
      <animated.div
        class="resume"
        onMouseMove={handleOnMouseMove}
        onMouseLeave={handleOnMouseLeave}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <p className="download-btn">View PDF</p>
      </animated.div>
    </animated.a>
  );
}
