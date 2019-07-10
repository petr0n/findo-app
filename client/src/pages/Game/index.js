import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

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
      apiUrl: process.env.NODE_ENV === 'development' ? "http://localhost:3001" : "https://play.findo.games",
      gameboardId: "", 
      page: this.props.page ? this.props.page : "login"
    }
  }

  handlePageChange = (page, user, gameType, gameboardId) => {
    this.setState({ 
      page: page,
      user: user, 
      gameType: gameType,
      gameboardId: gameboardId
    });

    history.push("/" + page);
    this.changePage(page, user);
  }


  changePage(page, user) {
    let currentUser = user ? user : this.props.user;
    let currentPage = page ? page : this.state.page;

    currentPage = currentUser && (currentUser.role === "user" || currentUser.role === "admin") && currentPage === "login" ? "gameselect" : currentPage;
    console.log("currentUser: ", currentUser);
    switch (currentPage) {
      case "gameselect":
        return (
          <GameSelect 
          key={"gameselect"} 
          handlePageChange={this.handlePageChange}
          user={currentUser} />
        );
      case "gameboard":
        return (
          <Gameboard 
            key={"gameboard"} 
            gameboardId={this.props.gameboardId} 
            handlePageChange={this.handlePageChange}
            user={currentUser}
            gameType={this.state.gameType} />
        );
      case "suggesttile":
        return (
          <SuggestTile 
            key={"suggest"} 
            handlePageChange={this.handlePageChange}
            user={currentUser}
            isPublic={true} />
        );
      case "winner":
        return (
          <Winner 
          key={"winner"} 
          gameboardId={this.state.gameboardId} 
          handlePageChange={this.handlePageChange}
          user={currentUser} />
        );
      case "login":
        return (
          <Login key={"login"} 
          handlePageChange={this.handlePageChange}
          apiUrl={this.state.apiUrl}
          user={this.props.user} />
        );
      case "logout":
          return (
            <Login key={"login"} 
            logoutMessage={"You've logged out"}
            handlePageChange={this.handlePageChange}
            apiUrl={this.state.apiUrl}
            user={currentUser} />
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
    // console.log('Index render this.props', this.props);
    const pageActive = true;
    return (
      <>
        <Wrapper>
          <Header />
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={pageActive}
            timeout={300}>
            {this.changePage()}
          </CSSTransition>
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