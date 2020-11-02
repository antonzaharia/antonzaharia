import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div id="wrapper">
          {/* <Route exact path="/" render={ routerProps => <ContentContainer {...routerProps} />}/> */}
          <Route exact path="/" render={ routerProps => <MainContainer {...routerProps} />}/>
          <div id="bg"></div>

          
        </div>
      </Router>
    </div>
  );
}

export default App;
