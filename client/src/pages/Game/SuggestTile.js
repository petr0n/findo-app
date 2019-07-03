import React, { Component } from "react";
import TileAdd from "../../components/TileAdd";




class SuggestTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        apiUrl: this.props.apiUrl,
        user: this.props.user,
        loggedIn: this.props.loggedIn
      }
  };
  
  componentDidMount(){
    // add logic
  }
  
  render() {

    return (
      <div>
        <div className="background login-box mx-auto rounded flex flex-col items-center p-8 w-full flex-none">
          <h1 className="start-text cursor-pointer mb-4">Suggest a Tile</h1>
          <TileAdd key={"add"} />
        </div>
      </div>
    );
  }
}

//EXPORT
//=======================================================
export default SuggestTile;