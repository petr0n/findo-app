import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";
import Admin from "./pages/Admin";
import privacy from "./pages/privacy";


import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/privacy" exact component={privacy} />
          <Route path="/gameselect" render={() => <Game page={"gameselect"} />} />
          <Route path="/gameboard" render={() => <Game page={"gameboard"} />} />
          <Route path="/login" render={() => <Game page={"login"} />} />
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Game} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
