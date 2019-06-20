import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Gameboard from "./Gameboard";
import Login from "./Login";
import "./game.css";



//CONTENT
//=======================================================

class Game extends Component {
  state = {
    placeholder: "This is only a template",
    loggedIn: false,
    hasPrevious: true,
    gameboardId: null,
    currentPage: "Login"
  }

  renderPage(){
    switch (this.state.currentPage) {
      case "Login":
        return (<Login key={"login1"} hasPrevious={this.state.hasPrevious} />);
      case "Game":
        return (<Gameboard key={"game"} gameboardId={this.state.gameboardId} />);
      default:
        return (<Login key={"login2"} hasPrevious={this.state.hasPrevious} />)
    }
  }

  render() {
    return (
      <Wrapper>
        <Header />
          <ReactCSSTransitionGroup 
            transitionName="page" 
            transitionEnterTimeout={300} 
            transitionLeaveTimeout={300}
          >
            {this.renderPage()}
          </ReactCSSTransitionGroup>
        <Footer />
      </Wrapper>
      );
    }
  }
  // <div>game page</div>
  // {this.state.loggedIn ?
  //   <Gameboard gameboardId={this.state.gameboardId} /> :
  //   <Login hasPrevious={this.state.hasPrevious} />}

//EXPORT
//=======================================================
export default Game;