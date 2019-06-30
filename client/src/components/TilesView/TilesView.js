//IMPORT
//=======================================================
import React, { Component } from "react";
import "./TilesView.css";
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
                        <div>
                            {tiles.tileText}
                        </div>
                        <button>Activate/Deactivate</button>
                        <button>Edit Me</button>
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