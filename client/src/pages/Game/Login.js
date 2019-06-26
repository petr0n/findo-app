import React, { Component } from "react";
import axios from 'axios';

// import { Link } from "react-router-dom"; //react router dom

//CONTENT
//=======================================================

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        apiUrl: this.props.apiUrl
      }
  };
  
  componentDidMount(){
    // add logic
  }
  

  // handleStartGame = (e, page) => {
  //   e.preventDefault();
  //   console.log(page);
  //   this.setState({
  //     currentPage: page
  //   })
  // }

  handleFaceBookClick = () => {
    axios.get(`${this.state.apiUrl}/auth/facebook`)
      .then(response => {
        console.log(response.data);
      });
  }
  handleGoogleClick = () => {
    axios.get(`${this.state.apiUrl}/auth/google`)
      .then(response => {
        console.log(response.data);
      });
  }

  render() {

    return (
      <div className="background mx-auto rounded flex flex-col items-center p-8 w-full flex-none">
        <div className="start-text cursor-pointer mb-4 leading-none" onClick={() => this.props.handlePageChange("gameselect")}>Start Game as guest</div>
        <div className="info-text mb-4">Login to share!</div>
        {/* {<div className="login-text cursor-pointer mb-4" onClick={() => this.props.handlePageChange("game")}>FACEBOOK</div>
        <div className="login-text cursor-pointer mb-4" onClick={() => this.props.handlePageChange("game")}>GOOGLE</div>} */}
        <div onClick={this.handleGoogleClick} className="cursor-pointer">Login to Google</div>
        <div onClick={this.handleFaceBookClick} className="cursor-pointer">Login to Facebook</div>
        <br />
        <br />
        <a href="/">home</a>
        <a href="/logout">Logout</a>
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default Login;