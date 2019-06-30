// What this page does:
// This page displays all tiles
// Gives an option to Edit a tile (this take you to the tileEdit component)
// Gives and option to deactivate a tile (this updates the status of the tile)
// Give an option to activate a tile (this updates the status of the tile) 

//IMPORT
//=======================================================
import React, {Component} from "react";
// import "./TilesView.css";
// import "./Tile.js";
// import "./Buttons/btnActivate";
// import "./Buttons/btnDeactivate";
// import ".Buttons/btnEdit";
import tileApi from "../../utils/tileAPI";

class TilesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileText: " ",
    }
  }

  Button = (use) =>{
    // use = approve or deny or whatever
  
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

  render() {
    // const { tileText } = this.state;
    return (
      <div>
        <h2 className="text-2xl">Tiles View</h2>
        {/* List goes here */}
      </div>
    );
  }
} 

//EXPORT
//=======================================================
export default TilesView;