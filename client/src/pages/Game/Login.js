import React, { Component } from "react";
// import { Link } from "react-router-dom"; //react router dom


//CONTENT
//=======================================================

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        placeholder: "This is only a template"
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

  render() {

    return (
      <div className="background mx-auto rounded flex flex-col items-center p-8 w-full flex-none">
        <div className="start-text cursor-pointer mb-4">Login</div>
        <div className="login-text cursor-pointer mb-4" onClick={() => this.props.handlePageChange("game")}><i className="fab fa-facebook-f"></i>FACEBOOK</div>
        <div className="login-text cursor-pointer mb-4" onClick={() => this.props.handlePageChange("game")}><i className="fab fa-google"></i>GOOGLE</div>
          <div className="guest login-text cursor-pointer mb-4" onClick={() => this.props.handlePageChange("game")}>Continue as Guest</div>
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default Login;