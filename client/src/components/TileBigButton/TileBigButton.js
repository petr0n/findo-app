import React, { Component } from "react";
import "./TileBigButton.css";
//import { Link } from "react-router-dom"



class TileBigButton extends Component {

	handleClick = () => {
		let data = this.props.tileBigData;
		data.selected = true;
		this.props.handleTileBigClick(data);
	}

	render() {
		return (
			<div className="cursor-pointer btn rounded mx-auto items-center justify-between mb-2 w-full" 
			onClick={() => this.handleClick()}>Select Tile</div>
		)
	}
}


export default TileBigButton;