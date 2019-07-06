import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import gameboardAPI from "../../utils/gameboardAPI";

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
      apiUrl: process.env.NODE_ENV === 'development' ? "http://localhost:3001" : "https://play.findo.games",
      gameboardId: "", 
      page: "login"
    }
  }
  componentDidMount(){
    // console.log('Index componentDidMount this.props.page: ', this.props.page);
    // console.log('Index componentDidMount this.state.user: ', this.state.user);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Index componentDidUpdate this.state: ' , this.state);
    console.log('Index componentDidUpdate prevState: ' , prevState);
    console.log('-------------------');
    console.log('Index componentDidUpdate this.props: ' , this.props);
    console.log('Index componentDidUpdate prevProps: ' , prevProps);
    if (this.state.page !== this.props.page) {
      this.setState({
        page: this.props.page
      })
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

  // redirectIfLoggedIn = () => {
  //   console.log('Index redirectIfLoggedIn props.user: ' , this.props.user);  
  // }

  

  changePage(page, user){
    console.log('Index changePage this.state', this.state);
    let currentPage = page ? page : this.state.page;
    let currentUser = user ? user : this.props.user;
    switch (currentPage) {
      case "gameselect":
        return (
          <GameSelect 
          key={"gameselect"} 
          handlePageChange={this.handlePageChange}
          user={currentUser} />
        );
      case "gameboard":
        console.log('Index changePage this.state.gameboardId', this.state.gameboardId);
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
            user={currentUser} />
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
          user={currentUser} />
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
          <Splash />
        );
    }
  }

render() {
  console.log('Index render this.props', this.props);

  return (
    <>
      <Wrapper>
        <Header />
        <ReactCSSTransitionGroup
          transitionName="fade" 
          transitionEnterTimeout={1000} 
          transitionLeaveTimeout={500}
        >
          {
            // this.props.page ? 
            // this.changePage(this.props.page, this.props.user) :
            this.changePage()
          }
        </ReactCSSTransitionGroup>
        <Footer />
      </Wrapper>
      <UserBar user={this.props.user} />
    </>
    );
  }
}

export default Game;