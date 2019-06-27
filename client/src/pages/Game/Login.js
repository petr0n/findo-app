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

  handleFacebookClick = () => {
    axios.get(`${this.state.apiUrl}/auth/facebook`)
      .then(response => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }
  handleGoogleClick = () => {
    axios.get(`${this.state.apiUrl}/auth/google`)
      .then(response => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {

    return (
      <div className="background mx-auto rounded flex flex-col items-center p-8 w-full flex-none">
        <div className="start-text cursor-pointer mb-4">Login</div>
        <div className="login-text cursor-pointer mb-4" onClick={this.handleFacebookClick}><i className="fab fa-facebook-f"></i>FACEBOOK</div>
        <div className="login-text cursor-pointer mb-4" onClick={this.handleFacebookClick}><i className="fab fa-google"></i>GOOGLE</div>
          <div className="guest login-text cursor-pointer mb-4" onClick={() => this.props.handlePageChange("game")}>Continue as Guest</div>
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default Login;