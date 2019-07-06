import React, { Component } from "react";
import axios from "axios";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        apiUrl: this.props.apiUrl,
        // user: this.props.user
      }
  };
  
  componentDidMount(){
   
  }

  logInGuestUser = () => {
    const userData = {
      "_id" : "5d1a21002c0c75975a32b01b",
      "email" : "guest@gmail.com",
      "name" : "guest",
      "role" : "guest",
      "socialId" : "imaguest1234",
      "socialType" : "none"
    };
    axios.get('/auth/user',  {params: {user: userData}} ).then(response => {
			console.log("LoginGuestUser response.data: ", response.data)
			if (!!response.data.user) {
        console.log('GUEST USER');
				this.setState({
          user: response.data
        });
        return this.props.handlePageChange("gameselect", this.state.user);
			} else {
				this.setState({
          user: null
				})
      }
		})
  };

  loginBtns = () => {
    return (
      <div className="w-full mb-6 text-center">
        <div className="flex justify-around w-full mb-6">
          <a className="login-link cursor-pointer p-2 rounded" href={`${this.state.apiUrl}/auth/facebook`}>
            <i className="fab fa-facebook-f"></i>FACEBOOK
          </a>
          <a className="login-link cursor-pointer p-2 rounded" href={`${this.state.apiUrl}/auth/google`}>
            <i className="fab fa-google"></i>GOOGLE
          </a>
        </div>
        <div className="guest-link cursor-pointer my-4 text-center p-2 rounded" onClick={() => this.logInGuestUser()}>
          Play as Guest
        </div>
      </div>
    )
  }

  render() {
    console.log('Login this.props.user', this.props.user);
    return (
      <div className="background login-box mx-auto rounded flex flex-col items-center justify-center p-8 w-full flex-none">
        <h1 className="mb-5 text-xl">Login</h1>
        {this.props.logoutMessage}
        {this.loginBtns()}
        <div className="how-to">
          <h4 className="text-lg">HOW TO PLAY</h4>
          <p className="text-xs">You will get a bingo-like card of 24 random tiles. Once you see what's on a tile in real life, click the tile to mark it as found. Similar to BINGO, once you get 5 in a row you win! It can be 5 in a row up, down or diagonally.</p>
        </div>
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default Login;