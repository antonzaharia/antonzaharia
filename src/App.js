import ContentContainer from "./containers/ContentContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="main">
          <Route exact path="/" render={ routerProps => <ContentContainer {...routerProps} />}/>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
