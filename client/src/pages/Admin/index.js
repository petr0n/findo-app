import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "./Home";
// import AddTile from "./AddTile";


//CONTENT
//=======================================================

class Admin extends Component {
  state = {
    placeholder: "This is only a template",
    loggedIn: true
  }
  render() {
    console.log('admin');
    return (
      <Wrapper>
        <Header />
        <Home />
        <Footer />
        </Wrapper>
        );
      }
    }
    
//EXPORT
//=======================================================
// <AddTile />
export default Admin;