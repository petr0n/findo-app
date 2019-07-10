import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Game from "./pages/Game";
import Admin from "./pages/Admin";
import privacy from "./pages/privacy";
import Splash from "./pages/splash.js";
import axios from "axios";


import './App.css';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    console.log("PrivateRoute: ", rest);
    return (
      rest.isAdminUser === true
      ? <Admin {...rest} />
      : <Redirect to='/' />
    )}} />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAdminUser: false
    }
  };
  
  componentDidMount() {
    
    const authUserUrl = window.location.pathname === "/logout" ? "/auth/user/logout=true" : "/auth/user";
    axios.get(authUserUrl).then(response => {
			if (!!response.data.user) {
        console.log('THERE IS A USER');
				this.setState({
          user: response.data.user,
          isAdminUser: response.data.user.role === "admin" ? true : false
				})
			} else {
				this.setState({
          user: null
				})
			} 
		})
  }

  render() {
    // console.log('App this.state.isAdminUser', this.state.isAdminUser);
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
          <PrivateRoute isAdminUser={this.state.isAdminUser} user={this.state.user} path="/admin"  />
          <Route path="/" component={Splash} /> 
          {/*<Route path="/" render={() => <Game page={"login"} user={this.state.user} />} /> 
          <PrivateRoute path="/admin1" render={() => <Admin user={this.state.user} />} />
          */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
