import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import gameboardAPI from "../../utils/gameboardAPI"

import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserBar from "../../components/UserBar";
import Splash from "./Splash";
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
      loggedIn: this.props.loggedIn ? this.props.loggedIn : false,
      currentPage: this.props.page ? this.props.page : "login",
      apiUrl: process.env.NODE_ENV === 'development' ? "http://localhost:3001" : "https://play.findo.games",
      gameboardId: ""
      // user: this.props.user ? this.props.user : null
    }
  }

  componentDidMount(){
    console.log('Index componentDidMount this.state: ' , this.state);  
  }
    
  handlePageChange = (page, user, loggedIn, gameType) => {
    this.setState({ 
      currentPage: page,
      user: user, 
      gameType: gameType,
      loggedIn: loggedIn
    });
    // console.log('Index this.state.loggedIn', this.state.loggedIn);
    // console.log('Index this.state.user: ' , this.state.user);

    history.push("/" + page);
    this.changePage();
  }

  handleLoadGameClick = () => {
    let userId = this.props.user._id;
    gameboardAPI.getGamesByUserAndStatus(userId)
      .then(res => {
        console.log(res);
        // this.setState({
        //   currentPage: "gameboard",
        //   gameboardId: res.id
        // })
      });

  }

  changePage(){
    switch (this.state.currentPage) {
      case "gameselect":
        return (
          <GameSelect 
            key={"gameselect"} 
            gameboardId={this.state.gameboardId} 
            handlePageChange={this.handlePageChange}
            user={this.props.user}
            loggedIn={this.state.loggedIn} />
        );
      case "gameboard":
        return (
          <Gameboard 
            key={"gameboard"} 
            gameboardId={this.state.gameboardId} 
            handlePageChange={this.handlePageChange}
            user={this.state.user}
            loggedIn={this.state.loggedIn}
            gameType={this.state.gameType} />
        );
      case "suggesttile":
        return (
          <SuggestTile 
            key={"suggest"} 
            gameboardId={this.state.gameboardId} 
            handlePageChange={this.handlePageChange}
            loggedIn={this.state.loggedIn}
            user={this.state.user} />
        );
      case "winner":
        return (
          <Winner 
          key={"winner"} 
          gameboardId={this.state.gameboardId} 
          handlePageChange={this.handlePageChange}
          loggedIn={this.state.loggedIn}
          user={this.state.user} />
        );
      case "login":
        return (
          <Login key={"login"} 
          hasPrevious={this.state.hasPrevious} 
          handlePageChange={this.handlePageChange}
          apiUrl={this.state.apiUrl}
          user={this.state.user}
          loggedIn={this.state.loggedIn} />
        );
      default:
        return (
          <Splash />
        );
    }
  }

render() {
  console.log('Index render this.props.user', this.props.user);
  return (
    <>
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
      <UserBar 
        loggedIn={this.state.loggedIn}
        user={this.props.user} />
    </>
    );
  }
}

export default Game;