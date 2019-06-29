//IMPORT
//=======================================================
import React, {Component} from "react";
import "./AdminNav.css";


//CONTENT
//=======================================================
class AdminNav extends Component {
    displayTiles = () => {
        this.setState({
            displayTiles: !this.state.displayTiles
        })
    }

    render() {
        return (
            <nav className="admin-nav">
                <ul>
                    <li className="suggested cursor-pointer" onClick={() => this.props.handleNavClick("suggest")}>Suggested</li>
                    <li className="view-all cursor-pointer" onClick={() => this.props.handleNavClick("viewall")}>View All</li>
                    <li className="add-tile cursor-pointer" onClick={() => this.props.handleNavClick("addtile")}>Add Tile</li>
                </ul>
            </nav>
        )
    }
}

export default AdminNav;