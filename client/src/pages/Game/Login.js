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
      <div className="trans-white mx-auto rounded flex flex-col items-center p-8">
        <h2 className="text-2xl mb-10">Login</h2>
        <div className="cursor-pointer mb-4" onClick={() => this.props.handlePageChange("game")}>FACEBOOK</div>
        <div className="cursor-pointer mb-4" onClick={() => this.props.handlePageChange("game")}>GOOGLE</div>
        <div className="cursor-pointer mb-4" onClick={() => this.props.handlePageChange("game")}>Start Game</div>
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default Login;