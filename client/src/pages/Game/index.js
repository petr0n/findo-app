import React, { Component } from "react";
import { Transition } from "react-transition-group";

import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserBar from "../../components/UserBar";
import Login from "./Login";
import SuggestTile from "./SuggestTile";
import GameSelect from "./GameSelect";
import Gameboard from "./Gameboard";
import Winner from "./Winner";
import "./main.css";

import {createBrowserHistory} from "history";
const history = createBrowserHistory();

//CONTENT
//=======================================================

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.page ? this.props.page : "login",
      apiUrl: process.env.NODE_ENV === 'development' ? "http://localhost:3001" : "https://play.findo.games",
      gameboardId: "",
      user: this.props.user ? this.props.user : null
    }
  }

  componentDidMount(){
    // console.log('Index componentDidMount this.state: ' , this.state);  
  }
    
  handlePageChange = (page, user, gameType, gameboardId) => {
    this.setState({ 
      currentPage: page,
      user: user, 
      gameType: gameType,
      gameboardId: gameboardId
    });
    console.log('Index this.state: ' , this.state);

    history.push("/" + page);
    this.changePage();
  }

  changePage(){
    switch (this.state.currentPage) {
      case "gameselect":
        return (
          <GameSelect 
          key={"gameselect"} 
          handlePageChange={this.handlePageChange}
          user={this.props.user} />
        );
      case "gameboard":
        console.log('Index changePage this.state.gameboardId', this.state.gameboardId);
        return (
          <Gameboard 
            key={"gameboard"} 
            gameboardId={this.state.gameboardId} 
            handlePageChange={this.handlePageChange}
            user={this.state.user}
            gameType={this.state.gameType} />
        );
      case "suggesttile":
        return (
          <SuggestTile 
            key={"suggest"} 
            handlePageChange={this.handlePageChange}
            user={this.state.user} />
        );
      case "winner":
        return (
          <Winner 
          key={"winner"} 
          gameboardId={this.state.gameboardId} 
          handlePageChange={this.handlePageChange}
          user={this.state.user} />
        );
      case "login":
        return (
          <Login key={"login"} 
          handlePageChange={this.handlePageChange}
          apiUrl={this.state.apiUrl}
          user={this.props.user} />
        );
      default:
        return (
          <Login key={"login"} 
          handlePageChange={this.handlePageChange}
          apiUrl={this.state.apiUrl}
          user={this.props.user} />
        );
    }
  }

render() {
  console.log('Index render this.props.user', this.props.user);
  return (
    <>
      <Wrapper>
        <Header />
        <Transition
          transitionName="fade" 
          transitionEnterTimeout={1000} 
          transitionLeaveTimeout={500}
        >
          {this.changePage()}
        </Transition>
        <Footer />
      </Wrapper>
      <UserBar 
        user={this.props.user}
        apiUrl={this.state.apiUrl} />
    </>
    );
  }
}

export default Game;