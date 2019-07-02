//IMPORT
//=======================================================
import React, { Component } from "react";
import "./TilesManage.css";
import tileApi from "../../utils/tileAPI";
import { List, ListItem } from "../TileList"

// this page will act like a "page" would, where it will render the UL/LI and buttons
//AdminNav will import his component

//CONTENT
//=======================================================
class TilesManage extends Component {
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
    this.loadPendingTiles();
  };

  // Load all the tiles and set them to the this.state.tiles
  //====================================================



  loadPendingTiles = () => {
    tileApi.getPendingTiles({ })
    .then(res =>
      this.setState({
        tiles: res.data
      })
      )
      .catch(err => console.log(err));
  };

  // handleApproveClick
  // this is still in progress.  need to consult with back end to get exact names of features within the tile 
  //====================================================
  // Also add onClickEvent at bottom
  // className={btnStyle} onClick={() => this.props.handleStatusChange("isActive")}

  // handleApproveClick = (approveTile) => {
  //   console.log("approveTile" , approveTile);
  //   this.setState({
  //     approveTile: approveTile,
  //     status: "active"
  //   });
  //   this.props.handleStatusChange("active");
  // }

  //handleDenyClick
  // this is still in progress.  need to consult with back end to get exact names of features within the tile 
 //====================================================
  // Also add onClickEvent at bottom
  // className={btnStyle} onClick={() => this.props.handleStatusChange("isInactive")}

    // handleDenyClick = (denyTile) => {
  //   console.log("denyTile" , denyTile);
  //   this.setState({
  //     denyTile: denyTile,
  //     status: "inactive"
  //   });
  //   this.props.handleStatusChange("inactive");
  // }

  //render
  //====================================================
  render() {
    return (
        <div id="list">
            {this.state.tiles.length ? (
                <List>
                {this.state.tiles.map(tiles => {
                    return (
                    <ListItem key={tiles._id}>
                        <div id="listItem">
                          {tiles.tileText}
                          <button id="approve">Approve</button>
                          <button id="deny">Deny</button>
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
} 

//EXPORT
//=======================================================
export default TilesManage;