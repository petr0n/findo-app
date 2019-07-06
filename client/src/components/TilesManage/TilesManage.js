//IMPORT
//=======================================================
import React, { Component } from "react";
import "./TilesManage.css";
import tileApi from "../../utils/tileAPI";
import { List, ListItem } from "../TileList";

//CONTENT 
//=======================================================
class TilesManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      //isInEditMode: false,
    }
  };

  //API CALLS **************************************************

  // load all tiles and save them to the state
  //====================================================
  componentDidMount() {
    this.loadPendingTiles();
  };

  // LOAD PENDING TILES
  //====================================================
  loadPendingTiles = () => {
    tileApi.getPendingTiles({})
      .then(res =>
        this.setState({
          tiles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // APPROVE CLICK (ACTIVE
  //====================================================
  approvePendingTile = (id, status) => {
    tileApi.updateTile (id, {status: 'active'})
    .then (res => {
      console.log(res)
      this.loadPendingTiles()
      }
    ) 
    .catch(err => console.log(err))
  }

  // DENY CLICK (INACTIVE)
  //====================================================
  denyPendingTile = (id, status) => {
    tileApi.updateTile (id, {status: 'active'})
    .then (res => {
      console.log(res)
      this.loadPendingTiles()
      }
    ) 
    .catch(err => console.log(err))
  }

  //RENDERING COMPONENTS**************************************************

  //RENDER DEFAULT VIEW
  //====================================================

  renderDefaultView = () => {
    return (
      <div className="list">
        {this.state.tiles.length ? (
          <List>
            {this.state.tiles.map(tiles => {
              return (
                <ListItem key={tiles._id}>
                  <div className="break-all pr-2">
                    {tiles.tileText}
                  </div>
                  <div className="whitespace-no-wrap">
                    <button onClick={() => this.approvePendingTile(tiles._id, tiles.status)}
                    className="approve-btn rounded px-2 py-1 mr-4">Approve</button>
                    <button onClick={() => this.denyPendingTile(tiles._id, tiles.status)}
                    className="deny-btn rounded px-2 py-1">Deny</button>
                  </div>
                </ListItem>
              );
            })}
          </List>
        ) : (
            <h3>No pending tiles to display</h3>
          )}
      </div>
    );
  }; // ==> end renderDefaultView

  //CONDITIONALLY RENDER THE COMPONENTS
  //====================================================
  render() {
    return this.renderDefaultView(this.state.tiles)
  };
}

//EXPORT
//=======================================================
export default TilesManage;