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
      case "tilesview":
        return (
          <TilesView
            key={"view"}
            user={this.props.user}
            handleNavClick={this.handleNavClick} />
        );
      case "addtile":
        return (
          <TileAdd
            key={"add"}
            user={this.props.user}
            handleNavClick={this.handleNavClick} />
        );
      default:
        return (
          <TilesManage
            key={"suggest"}
            user={this.props.user}
            handleNavClick={this.handleNavClick} />
        );
    }

  }
  handleNavClick = (pageName) => {
    // console.log("pageName", pageName)
    this.setState({
      page: this.renderPage(pageName)
    })
  }


  render() {
    // console.log('Admin home render user: ', this.props.user);
    return (
      <div className="container mx-auto flex">
        <div className="w-11/12 mx-auto">
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