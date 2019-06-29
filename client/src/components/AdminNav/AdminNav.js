//IMPORT
//=======================================================
import React from "react";
import "./AdminNav.css";
import "./btnAdd";
import "./btnSuggested";
import "./btnView";
import Header from "../../Header";
import Footer from "../../Footer";
import AdminWrapper from "../../AdminWrapper";
import TileAdd "../../TileAdd";
import TilesManage from "../TilesManage";
import TilesView from "../TilesView";

//CONTENT
//=======================================================
class NavBar extends Component {
    displayTiles = () => {
        this.setState({
            displayTiles: !this.state.displayTiles
        })
    }
}

render(){
    return (
        <AdminWrapper>
            <Header />
            <nav className="admin-nav">
                <ul>
                    <li className="suggested" onClick={this.displayTiles}>Suggested</li>
                    <li className="view-all" onClick={this.displayTiles}>View All</li>
                    <li className="add-tile" onClick={this.displayTiles}>Add Tile</li>
                </ul>
            </nav>
            <div>
                <TilesManage/>
                <TilesView/>
                <TileAdd/>
            </div>
            <Footer />
        </AdminWrapper>
    )
};

export default AdminNav;