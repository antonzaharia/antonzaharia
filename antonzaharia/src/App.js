import ContentContainer from './containers/ContentContainer'
import background from "./images/background.jpg"

function App() {
  return (
    <div >
      <img src={background} alt="background" className="background"/>
     <ContentContainer />
    </div>
  );
}

export default App;
