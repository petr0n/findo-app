import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Gameboard from "./Gameboard";
import Login from "./Login";
import GameSelect from "./GameSelect";
import SuggestTile from "./SuggestTile"
import "./main.css";

import {createBrowserHistory} from "history";
const history = createBrowserHistory();

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
      currentPage: this.props.page ? this.props.page : "login",
      apiUrl: process.env.NODE_ENV === 'development' ? "http://localhost:3001" : "https://play.findo.games",
      user: this.props.user ? this.props.user : null
    }
  }

  componentDidMount(){
    console.log('Game this.state.currentPage', this.state.currentPage);
  }


  handlePageChange = (page, user, gameType) => {
    this.setState({ 
      currentPage: page,
      user: user, 
      gameType: gameType
    });
    console.log('Index this.state.user: ' , this.state.user);

    history.push("/" + page);
    this.changePage();
  }




  changePage(){
    switch (this.state.currentPage) {
      case "gameselect":
        return (
          <GameSelect 
          key={"gameselect"} 
          gameboardId={this.state.gameboardId} 
          handlePageChange={this.handlePageChange}
          user={this.state.user} />
        );
      case "gameboard":
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
          gameboardId={this.state.gameboardId} 
          handlePageChange={this.handlePageChange}
          user={this.state.user} />
        );  
      default:
        return (
          <Login key={"login"} 
          hasPrevious={this.state.hasPrevious} 
          handlePageChange={this.handlePageChange}
          apiUrl={this.state.apiUrl}
          user={this.state.user} />
        );
    }
  }

render() {
  return (
    <Wrapper>
      <Header />
      <ReactCSSTransitionGroup
        transitionName="fade" 
        transitionEnterTimeout={1000} 
        transitionLeaveTimeout={500}
      >
        {this.changePage()}
      </ReactCSSTransitionGroup>
      <Footer />
    </Wrapper>
    );
  }
}

export default Game;