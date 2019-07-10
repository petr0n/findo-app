import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserBar from "../../components/UserBar";

import Home from "./Home";
// import AddTile from "./AddTile";


//CONTENT
//=======================================================

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user ? this.props.user : null,
      apiUrl: process.env.NODE_ENV === 'development' ? "http://localhost:3001" : "https://play.findo.games"
    }
  }
  
  render() {
    // console.log("index admin user: ", this.props)
    return (
      <Wrapper>
        <Header />
        <Home user={this.props.user} />
        <Footer />
        <UserBar 
          apiUrl={this.state.apiUrl}
          user={this.props.user} />
      </Wrapper>
      );
    }
  }
    
//EXPORT
//=======================================================
// <AddTile />
export default Admin;