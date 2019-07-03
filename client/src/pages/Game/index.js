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
      loggedIn: this.props.loggedIn ? this.props.loggedIn : false,
      hasPrevious: true,
      gameboardId: null,
      currentPage: this.props.page ? this.props.page : "login",
      apiUrl: process.env.NODE_ENV === 'development' ? "http://localhost:3001" : "https://play.findo.games",
      user: this.props.user ? this.props.user : null
    }
  }

  componentDidMount(){
    
  }
  
  showUserBar(loggedIn){
    const userData = this.state.user;
    return (
      <div className="fixed bottom-0 left-0 w-full bg-orange-100 p-1 border-t border-orange-600 z-20 text-xs">
          {loggedIn ? 
            <div className="w-full flex items-center justify-between">
              <div>
                Logged in as <span className="font-bold">{userData.user.name}</span>
              </div>
              <div>
                <a href="/" className="mx-3 hover:text-purple-400">Home</a>
                <a href="/logout" className="mx-3 hover:text-purple-400">Logout</a>
              </div>
            </div>
            : 
            <div className="w-full flex items-center justify-between">
              <div>
                You are not logged in.
              </div>
              <div>
                <a href="/" className="mx-3 hover:text-purple-400">Home</a>
              </div>
            </div>
          }
      </div>
      )
    }
    
    
  handlePageChange = (page, user, loggedIn, gameType) => {
    this.setState({ 
      currentPage: page,
      user: user, 
      gameType: gameType,
      loggedIn: loggedIn
    });
    console.log('Index this.state.loggedIn', this.state.loggedIn);
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
          user={this.state.user}
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
      default:
        return (
          <Login key={"login"} 
          hasPrevious={this.state.hasPrevious} 
          handlePageChange={this.handlePageChange}
          apiUrl={this.state.apiUrl}
          user={this.state.user}
          loggedIn={this.state.loggedIn} />
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
      {this.showUserBar(this.state.loggedIn)}
      <Footer />
    </Wrapper>
    );
  }
}

export default Game;