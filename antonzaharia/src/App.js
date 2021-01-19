import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function App() {
  const props = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, background: "black" },
    to: {
      opacity: 1,
      background: "black",
    },
  });
  return (
    <>
      <Router>
        <>
          {/* <Route exact path="/" render={ routerProps => <ContentContainer {...routerProps} />}/> */}
          <Route
            exact
            path="/"
            render={(routerProps) => <MainContainer {...routerProps} />}
          />
          <animated.div id="bg" style={props}></animated.div>
        </>
      </Router>
    </>
  );
}

export default App;
