import React, { Component } from "react";
// import { Link } from "react-router-dom"; //react router dom


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

  loginBtns = () => {
    return (
      <div>
        <p></p>
        <div className="flex justify-around w-full">
          <a className="login-text cursor-pointer mb-4 mr-4" href={`${this.state.apiUrl}/auth/facebook`}>
            <i className="fab fa-facebook-f"></i>FACEBOOK
          </a>
          <a className="login-text cursor-pointer mb-4" href={`${this.state.apiUrl}/auth/google`}>
            <i className="fab fa-google"></i>GOOGLE
          </a>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div className="background login-box mx-auto rounded flex flex-col items-center p-8 w-full flex-none">
        <h1 className="start-text cursor-pointer mb-4">Login</h1>
        {
          this.props.user ?
          <p>You are logged in as `${this.state.user.name}`</p> :  
          this.loginBtns() 
        }
        <div className="guest login-text cursor-pointer mb-4" onClick={() => this.props.handlePageChange("gameselect")}>
          Continue as Guest
        </div>
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