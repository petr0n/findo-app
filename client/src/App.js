import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Game from "./pages/Game";
import Admin from "./pages/Admin";
import privacy from "./pages/privacy";
import axios from "axios";


import './App.css';


// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100) // fake async
//   }
// }
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    this.state.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: null
    }
  };
  
  componentDidMount() {
    
    const authUserUrl = window.location.pathname === "/logout" ? "/auth/user/logout=true" : "/auth/user";
    console.log('authUserUrl: ', authUserUrl);
    axios.get(authUserUrl).then(response => {
			// console.log("App response.data: ", response.data)
			if (!!response.data.user) {
        console.log('THERE IS A USER');
        // console.log('App componentDidMount: ', response.data.user.role === "admin" ? "admin" : "user" );
				this.setState({
          isAuthenticated: (response.data.user.role === "admin" ? true : false),
          user: response.data.user
				})
			} else {
				this.setState({
          isAuthenticated: false,
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
          <Route path="/logout" render={() => <Game page={"logout"} />} />
          <Route path="/gameselect" render={() => <Game page={"gameselect"} user={this.state.user} />} />
          <Route path="/gameboard" render={() => <Game page={"gameboard"} user={this.state.user} />} />
          <Route path="/suggesttile" render={() => <Game page={"suggesttile"} user={this.state.user} />} />
          <Route path="/winner" render={() => <Game page={"winner"} user={this.state.user} />} />
          <PrivateRoute path="/admin" render={() => <Admin user={this.state.user} />} />
          <Route path="/"  render={() => <Game page={"login"} user={this.state.user} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
