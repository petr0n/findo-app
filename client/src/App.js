import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";
import Admin from "./pages/Admin";
import privacy from "./pages/privacy";


import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/privacy" exact component={privacy} />
          <Route path="/" component={Game} />
          <Route path="/login" component={Game} page={"login"} />
          <Route path="/gameselect" component={Game} page={"gameselect"} />
          <Route path="/gameboard" component={Game} page={"gameboard"} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
