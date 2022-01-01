import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import { Forum } from "./Containers/Forum/Forum";
import { Home } from "./Containers/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/:name">
          <Forum />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
