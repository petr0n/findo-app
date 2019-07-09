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
			<div className="cursor-pointer mx-auto phosphate text-brand-orange w-8/12 text-center pb-2 text-3xl btn-double hover_bg-brand-yellow" 
			onClick={() => this.handleClick()}>
				<div></div><div></div>
				{this.props.tileBigData.isChecked ? "Deselect Tile" : "Select Tile"}
			</div>
		)
	}
}

export default TileBigButton;