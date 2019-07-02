import React, { Component } from "react";



class SuggestTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        apiUrl: this.props.apiUrl,
        user: this.props.user,
        loggedIn: this.props.loggedIn
      }
  };
  
  componentDidMount(){
    // add logic
  }
  
  render() {

    return (
      <div>
        <div className="background nav-toggle rounded mx-auto items-center justify-between mb-2 w-full">
					<div className="login-text back cursor-pointer mb-4" onClick={() => this.props.handlePageChange("login", this.state.user, this.state.loggedIn)}>Back to Login</div>
				</div>
        <div className="background login-box mx-auto rounded flex flex-col items-center p-8 w-full flex-none">
          <h1 className="start-text cursor-pointer mb-4">Suggest a Tile</h1>
        </div>  
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default SuggestTile;