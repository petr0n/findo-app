//IMPORT
//=======================================================
import React, { Component } from "react";
import "./AdminNav.css";


class AdminNav extends Component {
	state = {activePage : "suggest"};

	handleClick = (pageName, navItem) => {
		this.props.handleNavClick(pageName);
		this.setState({activePage: navItem});
	};


	render() {
		const activeItem = "text-center block border border-orange-500 rounded py-2 px-4 bg-orange-500 hover_bg-orange-700 text-white cursor-pointer";
		const inactiveItem = "text-center block border-orange-100 border bg-orange-100 rounded hover_border-gray-200 text-orange-500 hover_bg-gray-200 py-2 px-4 cursor-pointer";
		return (
			<nav className="mb-8">
				<ul className="flex">
					<li className="flex-1 mr-2">
						<div className={this.state.activePage === "suggest" ? activeItem : inactiveItem} onClick={() => this.handleClick("tilesmanage", "suggest")}>Pending Tiles</div>
					</li>
					<li className="flex-1 mr-2">
						<div className={this.state.activePage === "view" ? activeItem : inactiveItem} onClick={() => this.handleClick("tilesview", "view")}>All Tiles</div>
					</li>
					<li className="text-center flex-1">
						<div className={this.state.activePage === "add" ? activeItem : inactiveItem} onClick={() => this.handleClick("addtile", "add")}>Add Tile</div>
					</li>
				</ul>
			</nav>
		)
	}
}

export default AdminNav;