import React, { Component } from "react";


//CONTENT
//=======================================================

class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: this.props.user
      }
  };
  
  componentDidMount(){

  }

  render() {
		const btnStyle = "cursor-pointer rounded bg-white border border-purple-500 px-4 py-2 m-4 flex items-center text-center hover_bg-orange-300";
		console.log('GameSelect this.state.user', this.state.user);
    return (
      <div>
        <div className="background mx-auto rounded px-3 py-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl">WINNER!</h1>
          <p>You got FINDO!</p>
        </div>
        <div className="flex items-center justify-center" onClick={() => this.props.handlePageChange("suggesttile", this.state.user)}>
          <div className={btnStyle}>Suggest a tile</div>
        </div>
      </div>
    );
  }
}

export default Winner;