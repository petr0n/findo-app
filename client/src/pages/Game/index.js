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
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "This is only a template",
      loggedIn: false,
      hasPrevious: true,
      gameboardId: null,
      currentPage: "login"
    }
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.changePage();
  }

  changePage(){
    console.log('this.state.currentPage' , this.state.currentPage);
    switch (this.state.currentPage) {
      case "login":
        return (<Login key={"login1"} hasPrevious={this.state.hasPrevious} handlePageChange={this.handlePageChange} />);
      case "game":
        return (<Gameboard key={"game"} gameboardId={this.state.gameboardId} handlePageChange={this.handlePageChange} />);
      default:
        return (<Login key={"login2"} hasPrevious={this.state.hasPrevious} handlePageChange={this.handlePageChange} />)
    }
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <ReactCSSTransitionGroup
          transitionName="page" 
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={500}
        >
          {this.changePage()}
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