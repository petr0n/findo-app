//IMPORT
//=======================================================

import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "./Home";
import AddTile from "./AddTile";


//CONTENT
//=======================================================

class Game extends Component {
  state = {
    placeholder: "This is only a template",
    loggedIn: true
  }
  render() {
    return (
      <Wrapper>
        <Header />
          <Home />
          <AddTile />
        <Footer />
      </Wrapper>
    );
  }
}

//EXPORT
//=======================================================
export default Game;