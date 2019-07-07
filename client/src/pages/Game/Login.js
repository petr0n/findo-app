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
        <div className="flex justify-around w-full mb-10">
          <a className="login-link cursor-pointer p-2 btn-double" href={`${this.state.apiUrl}/auth/facebook`}>
            <div></div><div></div>
            <i className="fab fa-facebook-f"></i>FACEBOOK
          </a>
          <a className="login-link cursor-pointer p-2 btn-double" href={`${this.state.apiUrl}/auth/google`}>
            <div></div><div></div>
            <i className="fab fa-google"></i>GOOGLE
          </a>
        </div><br />
        <div className="guest-link cursor-pointer my-10 text-center p-2 btn-double-secondary phosphate" onClick={() => this.logInGuestUser()}>
          <div></div><div></div>
          Play as Guest
        </div>
        
      </div>
    )
  }

  render() {
    console.log('Login this.props.user', this.props.user);
    return (
      <div className="background login-box mx-auto rounded flex flex-col items-center justify-center p-8 w-full flex-none">
        <div className="how-to my-5">
          <h1 className="text-xl">HOW TO PLAY</h1>
          <p className="text-sm">You will get a bingo-like card of 24 random tiles. Once you see what's on a tile in real life, click the tile to mark it as found. Similar to BINGO, once you get 5 in a row you win! It can be 5 in a row up, down or diagonally.</p>
        </div>
        {/* <h1 className="my-10 text-xl phosphate">Login</h1> */}
        <div className="text-xs mt-10 mb-5 text-gray-600">Log in with Facebook or Google to save your game</div>
        {this.loginBtns()}
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default Login;