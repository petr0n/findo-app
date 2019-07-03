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
      loggedIn: this.props.loggedIn ? this.props.loggedIn : false,
      user: this.props.user ? this.props.user : null
    }
  }
  
  render() {
    console.log('admin');
    return (
      <Wrapper>
        <Header />
        <Home />
        <Footer />
        <UserBar 
          loggedIn={this.state.loggedIn}
          user={this.state.user} />
        </Wrapper>
        );
      }
    }
    
//EXPORT
//=======================================================
// <AddTile />
export default Admin;