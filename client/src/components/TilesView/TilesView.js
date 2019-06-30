//IMPORT
//=======================================================
import React, { Component } from "react";
import "./TilesView.css";
import tileApi from "../../utils/tileAPI";
//import AdminWrapper from "../AdminWrapper/AdminWrapper";

// this page will act like a "page" would, where it will render the UL/LI and buttons
//AdminNav will import his component

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
      <div>Hello</div>
    )
  }
} // ==> end TilesView

//EXPORT
//=======================================================
export default TilesView;


//PREVIOUS VERSION
//=======================================================
  /*

class TilesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileText: " ",
    }
  }

    loadTiles = () => {
      tileApi.getTiles()
        .then(res =>
          this.setState({ tiles: res.data })
        )
        .catch(err => console.log(err));
    };

    componentDidMount() {
      this.loadTiles();
    };

    // handleDeactivateClick = () => {
    //   function updateTile (req, res) {
    //     return axios.put("/api/tiles/" + id, tileData);
    //     db.Tile
    //         .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    // }
    // handleActivateClick = () => {
    //   function updateTile (req, res) {
    //     return axios.put("/api/tiles/" + id, tileData);
    //     .then(response => {
    //       console.log(response.data);
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    // }
    // handleEditClick = () => {
    //   render () {
    //     return (
    //       tileEdit
    //     )}
    //     }).catch((error) => {
    //       console.log(error);
    //     };
  // What this page does:
  // This page displays all tiles
  // Gives an option to Edit a tile (this take you to the tileEdit component)
  // Gives and option to deactivate a tile (this updates the status of the tile)
  // Give an option to activate a tile (this updates the status of the tile) 
*/