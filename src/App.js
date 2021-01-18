import "../src/";
import Container from "./Container";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <body>
      <Router>
        <div className="App">
          <div className="head">
            <h1> Winc lil' Liedjeslijst</h1>{" "}
          </div>
          <Route path="/" exact component={Home} />{" "}
        </div>{" "}
      </Router>
    </body>
  );
}

const Home = () => {
  return (
    <div>
      <Container />
    </div>
  );
};
export default App;
