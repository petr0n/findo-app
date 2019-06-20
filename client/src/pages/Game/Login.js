import React, { Component } from "react";
// import { Link } from "react-router-dom"; //react router dom


//CONTENT
//=======================================================

class Login extends Component {
    state = {
        placeholder: "This is only a template"
    }
    componentDidMount(){
      // add logic
    }
    handleStartGame = (e, page) => {
      e.preventDefault();
      console.log(page);
      this.setState({
        currentPage: page
      })
    }

    render() {
      const elStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
      }
      return (
        <div className="mx-auto rounded flex flex-col items-center p-8" style={elStyle}>
          <h2 className="text-2xl mb-10">Login</h2>
          <div className="cursor-pointer mb-4" onClick={(e) => this.handleStartGame(e,"game")}>FACEBOOK</div>
          <div className="cursor-pointer mb-4" onClick={(e) => this.handleStartGame(e,"game")}>GOOGLE</div>
          <div className="cursor-pointer mb-4" onClick={(e) => this.handleStartGame(e,"game")}>Start Game</div>
        </div>
      );
    }
}

//EXPORT
//=======================================================
export default Login;