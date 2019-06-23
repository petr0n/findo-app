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
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
