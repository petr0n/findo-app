//IMPORT
//=======================================================

import React, {Component} from "react";
import "./TilesManage.css";
import "../List"; // componenet to hold the list
import "../ListItem";  // will hold each item/tile in pending tiles list
import tileApi from "../../utils/tileAPI";
import "./Tile.js";
import "./Buttons/btnActivate";
import "./Buttons/btnDeactivate";
import ".Buttons/btnEdit";

// this page will act like a "page" would, where it will render the UL/LI and buttons for pending tiles
//AdminNav will import this component

//CONTENT
//=======================================================
class TilesManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileText: " ",
    }
  }

    // load all pending tiles and save them to the state
  //====================================================

    loadPendingTiles = () => {
      tileApi.getPendingTiles()
        .then(res =>
          this.setState({ tiles: res.data })
        )
        .catch(err => console.log(err));
    };

    componentDidMount() {
      this.loadPendingTiles();
    }

      // handleEditTile render the edit tile component
  //====================================================

  // handleActivate/Deactivate
  //====================================================

  //render
  //====================================================

  render() {
    // const { tileText } = this.state;
    return (
      <div>
        <h2 className="text-2xl mb-4">Tiles Manage</h2>
        {/* List goes here */}
      </div>
    )
  }
} 
  
//EXPORT
//=======================================================
export default TilesManage;

