import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";
import Admin from "./pages/Admin";
import privacy from "./pages/privacy";
import axios from "axios";


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  };

  componentDidMount() {
    axios.get('/auth/user').then(response => {
			console.log("App response.data: ", response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
          user: response.data.user
				})
			} else {
				this.setState({
          user: null
				})
			}
		})
  }

  render() {
		console.log('App this.state.user', this.state.user);

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/privacy" exact component={privacy} />
          <Route path="/login" render={() => <Game page={"login"} user={this.state.user} />} />
          <Route path="/gameselect" render={() => <Game page={"gameselect"} user={this.state.user} />} />
          <Route path="/gameboard" render={() => <Game page={"gameboard"} user={this.state.user} />} />
          <Route path="/suggesttile" render={() => <Game page={"suggesttile"} user={this.state.user} />} />
          <Route path="/winner" render={() => <Game page={"winner"} user={this.state.user} />} />
          <Route path="/admin" render={() => <Admin user={this.state.user} />} />
          <Route path="/" component={Game} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
