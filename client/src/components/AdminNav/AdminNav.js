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

//CONTENT
//=======================================================
class AdminNav extends Component {
    state = {
        open: false;
    };

    const toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

}

render(){
    return (
        <nav className="navbar mb-2">
            <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            onClick={this.toggleNav}
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                            to="/"
                        >
                            Suggested
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            onClick={this.toggleNav}
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                            to="/saved"
                        >
                            View All
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            onClick={this.toggleNav}
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                            to="/saved"
                        >
                            Add Tile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default AdminNav;