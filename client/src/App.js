import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import game from "./pages/game";
import admin from "./pages/admin";


import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={game} />
          <Route path="/admin" exact component={admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
