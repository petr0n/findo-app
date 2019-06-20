//IMPORT
//=======================================================

import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Gameboard from "./Gameboard";
import Login from "./Login";


//CONTENT
//=======================================================

class Game extends Component {
  state = {
    placeholder: "This is only a template",
    loggedIn: false,
    hasPrevious: true,
    gameboardId: null
  }
  render() {
    return (
      <Wrapper>
      <Header />
        <div>game page</div>
        {this.state.loggedIn ?
          <Gameboard gameboardId={this.state.gameboardId} /> :
          <Login hasPrevious={this.state.hasPrevious} />}
        <Footer />
      </Wrapper>
    );
  }
}

//EXPORT
//=======================================================
export default Game;