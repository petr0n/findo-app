import React, { Component } from "react";
import axios from "axios";




class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        apiUrl: this.props.apiUrl,
        user: this.props.user
      }
  };
  
  componentDidMount(){
    // add logic
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
					loggedIn: true,
          user: response.data
        });
        return this.props.handlePageChange("gameselect", this.state.user);
			} else {
				this.setState({
					loggedIn: false,
          user: null
				})
      }
		})
  };

  loginBtns = () => {
    return (
      <div>
        <div className="flex justify-around w-full">
          <a className="login-text cursor-pointer mb-4 mr-4" href={`${this.state.apiUrl}/auth/facebook`}>
            <i className="fab fa-facebook-f"></i>FACEBOOK
          </a>
          <a className="login-text cursor-pointer mb-4" href={`${this.state.apiUrl}/auth/google`}>
            <i className="fab fa-google"></i>GOOGLE
          </a>
        </div>
        <div className="guest login-text cursor-pointer mb-4" onClick={() => this.logInGuestUser()}>
          Continue as Guest
        </div>
      </div>
    )
  }

  loggedInBtns = () => {
    const userData = this.state.user;
    return (
      <div>You are logged in as {userData.user.name}
        <div className="guest login-text cursor-pointer mb-4" onClick={() => this.logInGuestUser()}>
          Go to your game
        </div>
      </div> 
    )
  }

  render() {
    console.log('Login this.state.user', this.state.user);
    return (
      <div className="background login-box mx-auto rounded flex flex-col items-center p-8 w-full flex-none">
        <h1 className="start-text cursor-pointer mb-4">Login</h1>
        {
          this.state.user ?
          this.loggedInBtns():  
          this.loginBtns() 
        }
        
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