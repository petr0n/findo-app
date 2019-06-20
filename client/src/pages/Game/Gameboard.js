import React, { Component } from "react";

//CONTENT
//=======================================================

class Gameboard extends Component {
	constructor(props) {
    super(props);
    this.state = {
			placeholder: "This is only a template"
		}
  };
	render() {
		return (
			<div className="trans-white mx-auto rounded flex flex-col items-center p-8">
				<h2>Gameboard</h2>
				<div className="cursor-pointer mb-4" onClick={() => this.props.handlePageChange("login")}>Back to Login</div>
			</div>
		);
	}
}

//EXPORT
//=======================================================
export default Gameboard;