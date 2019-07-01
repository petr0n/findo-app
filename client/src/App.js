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
      loggedIn: false,
      user: null
    }
  };

  componentDidMount() {
    axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/privacy" exact component={privacy} />
          <Route path="/gameselect" render={() => <Game page={"gameselect"} user={this.state.user} />} />
          <Route path="/gameboard" render={() => <Game page={"gameboard"} user={this.state.user} />} />
          <Route path="/login" render={() => <Game page={"login"} user={this.state.user} />} />
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Game} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
