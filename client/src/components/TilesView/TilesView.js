//IMPORT
//=======================================================
import React, { Component } from "react";
import "./TilesView.css";
import "../List"; // componenet to hold the list
import "../ListItem"; // will hold each item/tile in pending tiles list
import tileApi from "../../utils/tileAPI";

// this page will act like a "page" would, where it will render the UL/LI and buttons
//AdminNav will import this component

//CONTENT
//=======================================================
class TilesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //tileText = [],
      //status ?
    }
  }

  // load all tiles and save them to the state
  //====================================================
  componentDidMount() {
    this.loadAllTiles();
  }

  // Load all the tiles and set them to the this.state.tiles
  //====================================================
  loadAllTiles = () => {
    tileApi.getTiles()
    .then(res =>
      this.setState({
        // insert db values to this.state.key
      })
      )
  }

  // handleEditTile render the edit tile component
  //====================================================

  // handleActivate/Deactivate
  //====================================================

  //render
  //====================================================
  render() {
    //const { tileText } = this.state;
    return (
      <div>
        <h2 className="text-2xl">Tiles View</h2>
        {/* List goes here */}
      </div>
    )
  }
} // ==> end TilesView

//EXPORT
//=======================================================
export default TilesView;

