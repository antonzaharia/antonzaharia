import React from "react";
import Header from "./Header";
import Icons from "./Icons";
import { useSpring, animated } from "react-spring";

const MainContainer = () => {
  const props = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0 },
    to: {
      opacity: 1,
    },
  });

  return (
    <animated.div id="wrapper" style={props}>
      <Header />
      <Icons />
      <footer id="footer">
        <p className="copyright">&copy; antonzaharia.com</p>
      </footer>
    </animated.div>
  );
};
export default MainContainer;
