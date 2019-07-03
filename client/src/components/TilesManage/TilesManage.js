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

handleApproveClick = event => {
    event.preventDefault();//prevent default form submit 
    tileApi.createTile({
      tileText: "",
      createdBy: "5d178f7161ffbf2ff410ca4b",
      eventType: this.state.eventType
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

  handleDenyClick = event => {
    event.preventDefault();//prevent default form submit 
    tileApi.deleteTile({
      tileText: this.state.tileText,
      deletedBy: this.state.user
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  //render
  //====================================================
  render() {
    return (
        <div className="list">
            {this.state.tiles.length ? (
                <List>
                {this.state.tiles.map((tiles, i) => {
                    return (
                    <ListItem key={tiles._id}>
                        <div className="listItem">
                            {tiles.tileText}
                        </div>
                        <div>
                          <button onClick={this.handleApproveClick} className="approve-btn rounded px-2 py-1 mr-4">Approve</button> 
                          <button onClick={this.handleDenyClick} className="deny-btn rounded px-2 py-1">Deny</button>
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