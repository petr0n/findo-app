import React, { Component } from "react";
import TilesManage from "../../components/TilesManage";
import TilesView from "../../components/TilesView";
import TileAdd from "../../components/TileAdd";
import Header from "../../components/Header";
import AdminNav from "../../components/AdminNav";
//CONTENT
//=======================================================

class Home extends Component {
    state = {
        placeholder: "This is only a template"
    }
    componentDidMount(){
      // add logic
      // get new tile suggestion via axios 
      // loop through and add to <TileEdit />
    }
    handleNavClick = (page) => {
        switch (this.state.currentPage) {
            case "suggest":
                return (
                    <TilesManage
                        key={"suggest"}
                        />
                );
            case "view":
                return (
                    <TilesView
                        key={"view"}
                         />
                );
            case "add":
                return (
                    <TileAdd
                        key={"add"}
                         />
                );
            default:
                return (
                    <TilesManage
                        key={"suggest"} />
                );
        }
    }

    
    render() {
        return (
          <div>
            <h2>Admin Home</h2>
            <Header />
            <AdminNav handleNavClick = {this.handleNavClick()} />
                  {this.this.handleNavClick()}
          </div>
        );
    }
}

//EXPORT
//=======================================================
export default Home;