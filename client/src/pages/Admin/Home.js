import React, { Component } from "react";
import TilesManage from "../../components/TilesManage";
import TilesView from "../../components/TilesView";
import TileAdd from "../../components/TileAdd";
import AdminNav from "../../components/AdminNav";
//CONTENT
//=======================================================

class Home extends Component {
  state = {
    page: ""
  }
  componentDidMount() {
    // add logic
    // get new tile suggestion via axios 
    // loop through and add to <TileEdit />
  }
  renderPage = (page) => {
    switch (this.state.currentPage) {
      case "suggest":
        return (
          <TilesManage
            key={"suggest"}
          />
        );
      case "viewall":
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
  handleNavClick = (page) => {
    console.log(page)
    this.setState({
      page: this.renderPage(page)
    })
  }


  render() {
    return (
      <div>
        <AdminNav handleNavClick={this.handleNavClick} />
        {this.state.page ? this.state.page : this.renderPage()}
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default Home;