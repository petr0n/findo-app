//IMPORT
//=======================================================
import React, { Component } from "react";
import "./TilesView.css";
// import "../List"; // componenet to hold the list
// import "../ListItem"; // will hold each item/tile in pending tiles list
import tileApi from "../../utils/tileAPI";
import { List, ListItem } from "../TileList"

// this page will act like a "page" would, where it will render the UL/LI and buttons
//AdminNav will import his component

//CONTENT
//=======================================================
class TilesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: []
      //status ?
    }
  };
  
  // load all tiles and save them to the state
  //====================================================
  componentDidMount() {
    this.loadAllTiles();
  };

  // Load all the tiles and set them to the this.state.tiles
  //====================================================



  loadAllTiles = () => {
    tileApi.getTiles({ })
    .then(res =>
      this.setState({
        tiles: res.data
      })
      )
      .catch(err => console.log(err));
  };

  // handleEditClick
  //====================================================
  
  /*
  editTile = id => {
      API.updateTile(id)
      .then(res => this.showEditPage) //needs work
      .catch(err => console.log(err));
  };

   Button click for "render": <btnTileEdit onClick={() => this.(tile._id)} />

     */


  // handleActivate/Deactivate
  //====================================================
  // taken from gameboardAPI.js file:
// handleActivateClick =() => {
//   updateGameTile = () => { 
//     tileApi.updateGameTile({ })
//     .then(res =>
//       this.setState({
//         tiles: res.data
//       })
//       )
//       .catch(err => console.log(err));
    
//   };
// }

  //render
  //====================================================
  render() {
    return (
        <div>
            {this.state.tiles.length ? (
                <List>
                {this.state.tiles.map(tiles => {
                    return (
                    <ListItem key={tiles._id}>
                        <div id="listItem">
                            {tiles.tileText}
                          <button className={tiles.status==="active" ? "deactivate" : "activate"} id="toggle">{tiles.status==="active" ? "Deactivate" : "Activate"}</button>
                          <button id="edit">Edit Me</button>
                        </div>
                    </ListItem>
                    );
                })}
                </List>
            ) : (
                <h3>No tiles to display</h3>
            )}
        </div>
    );
  };
} // ==> end TilesView

//EXPORT
//=======================================================
export default TilesView;