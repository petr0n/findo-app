//IMPORT
//=======================================================
import React, { Component } from "react";
import "./TilesView.css";
// import "../List"; // componenet to hold the list
// import "../ListItem"; // will hold each item/tile in pending tiles list
import tileApi from "../../utils/tileAPI";
import { List, ListItem } from "../TileList";

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
    };
  }

  // load all tiles and save them to the state
  //====================================================
  componentDidMount() {
    this.loadAllTiles();
  }

  // Load all the tiles and set them to the this.state.tiles
  //====================================================

  loadAllTiles = () => {
    tileApi
      .getTiles({})
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
      <div className="list">
        {this.state.tiles.length ? (
          <List>
            {this.state.tiles.map(tiles => {
              return (
                <ListItem key={tiles._id}>
                  <div>{tiles.tileText}</div>
                  <div className="whitespace-no-wrap">
                    <button
                      className={"activate-btn rounded px-2 py-1 mr-4 toggle " + (tiles.status === "active" ? "deactivate" : "activate")}>
                      {tiles.status === "active" ? "Deactivate" : "Activate"}
                    </button>
                    <button className="edit-btn rounded px-2 py-1 mr-4">
                      Edit <i className="fas fa-pencil-alt" />
                    </button>
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
  }
} // ==> end TilesView

//EXPORT
//=======================================================
export default TilesView;
