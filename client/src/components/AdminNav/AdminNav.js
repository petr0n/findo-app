//IMPORT
//=======================================================
import React, { Component } from "react";
import "./AdminNav.css";


class AdminNav extends Component {
	// displayTiles = () => {
	// 	this.setState({
	// 		displayTiles: !this.state.displayTiles
	// 	})
	// }

	render() {
		const activeItem = "text-center block border border-orange-500 rounded py-2 px-4 bg-orange-500 hover:bg-orange-700 text-white cursor-pointer";
		const inactiveItem = "text-center block border-orange-100 border bg-orange-100 rounded hover:border-gray-200 text-orange-500 hover:bg-gray-200 py-2 px-4 cursor-pointer";
		return (
			<nav className="mb-8">
				<ul className="flex">
					<li className="flex-1 mr-2">
						<div className={activeItem} onClick={() => this.props.handleNavClick("tilesmanage")}>Suggested</div>
					</li>
					<li className="flex-1 mr-2">
						<div className={inactiveItem} onClick={() => this.props.handleNavClick("tilesview")}>View All</div>
					</li>
					<li className="text-center flex-1">
						<div className={inactiveItem} onClick={() => this.props.handleNavClick("addtile")}>Add Tile</div>
					</li>
				</ul>
			</nav>
		)
	}
}

export default AdminNav;