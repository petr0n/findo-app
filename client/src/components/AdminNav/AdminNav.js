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
                    <li className="suggested" onClick={() => this.props.handleNavClick("suggest")}>Suggested</li>
                    <li className="view-all" onClick={() => this.props.handleNavClick("view all")}>View All</li>
                    <li className="add-tile" onClick={() => this.props.handleNavClick("add tile")}>Add Tile</li>
                </ul>
            </nav>
        )
    }
}

export default AdminNav;