import React, { Component } from "react";
import "./TileBigButton.css";


class TileBigButton extends Component {

	handleClick = () => {
		let data = this.props.tileBigData;
		// data.isChecked = true;
		this.props.handleTileBigButtonClick(data);
	}

	render() {
		// console.log('TileBigButton data: ', this.props.tileBigData)
		return (
			<div className="cursor-pointer btn rounded mx-auto items-center justify-between mb-2 w-full" 
			onClick={() => this.handleClick()}>
				{this.props.tileBigData.isChecked ? "Deselect Tile" : "Select Tile"}
			</div>
		)
	}
}

export default TileBigButton;