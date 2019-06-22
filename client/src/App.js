import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import game from "./pages/Game";
import admin from "./pages/Admin";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={game} />
          <Route exact path="/admin" component={admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
