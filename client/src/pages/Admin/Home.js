import React, { Component } from "react";
import TilesManage from "../../components/TilesManage";
import TilesView from "../../components/TilesView";
import TileAdd from "../../components/TileAdd";
import AdminNav from "../../components/AdminNav";
import "./admin.css";


class Home extends Component {
  state = {
    currentPage: "tilesmanage",
    page: ""
  }

  componentDidMount() {
    this.setState({ 
      page: this.renderPage(this.state.pageName)
    })
  }

  renderPage = (pageName) => {
    switch (pageName) {
      case "tilesmanage":
        return (
          <TilesManage
            key={"tilesmanage"}
          />
        );
      case "tilesview":
        return (
          <TilesView
            key={"view"}
          />
        );
      case "addtile":
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
  handleNavClick = (pageName) => {
    console.log("pageName", pageName)
    this.setState({
      page: this.renderPage(pageName)
    })
  }


  render() {
    return (
      <div className="container mx-auto flex px-5">
        <div className="w-full">
          <AdminNav handleNavClick={this.handleNavClick} />
          <div className="page-bg">
            {this.state.page}
          </div>
        </div>
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default Home;