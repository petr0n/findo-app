//IMPORT
//=======================================================
import React, { Component } from "react";
import "./TilesView.css";
import tileApi from "../../utils/tileAPI";
import { TextArea, SubmitBtn } from "../Form";
import { List, ListItem } from "../TileList";

//CONTENT 
//=======================================================
class TilesView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      tiles: [],
      isInEditMode: false,
      tileEdit: {}
    }
  };

  // WHEN THE DOM IS LOADED RENDER ALL TILES
  //====================================================
  componentDidMount() {
    this.loadAllTiles();
  };

  //FORM INTERACTIONS **************************************************

  //HANDLE INPUT CHANGE
  //====================================================
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    });
  };

  //API CALLS **************************************************

  // LOAD ALL TILES
  //====================================================
  loadAllTiles = () => {
    tileApi.getTiles({ })  //getTilesView
    .then(res =>
      this.setState({
        tiles: res.data
      })
      )
      .catch(err => console.log(err));
  };

  // GET TILE BY ID
  //====================================================
  getThisTile = (id) => { 
    console.log(id)
    tileApi.getTile(id)
    .then(res => {
      this.setState({
        tileEdit: res.data,
        tileId: res.data._id,
        isInEditMode: true
      })
      console.log('res', res.data)}
      )
      .catch(err => console.log(err));
  };

  // UPDATE TILE === TILE TEXT UPDATE
  //====================================================
  saveThisTile = (event) => {
    //console.log(tileText)
    event.preventDefault();
    tileApi.updateTile(this.state.tileId, {tileText: this.state.tileText})
    .then(res => {
      console.log(res)
      this.setState({
        isInEditMode: false
      })
      this.loadAllTiles()
      }
    )
      .catch(err => console.log(err));

  };

  // UPDATE TILE === TILE STATUS
  //====================================================
  changeTileStatus = (id, status) => {
  console.log("the id is " + id)
  //event.preventDefault();
    if (status === 'active') {
      tileApi.updateTile (id, {status: 'inactive'})
      .then (res => {
        console.log(res)
        this.setState({
          isInEditMode: false
        })
        this.loadAllTiles()
        }
      ) 
      .catch(err => console.log(err))
    } else {
      tileApi.updateTile (id, {status: 'active'})
      .then (res => {
        console.log(res)
        this.setState({
          isInEditMode: false
        })
        this.loadAllTiles()
        }
      ) 
      .catch(err => console.log(err))
    }
  }

  handleOptionChange() {
    //something
  }

  //RENDER DEFAULT VIEW
  //====================================================
  renderDefaultView = () => {
    return (
      <div className="list">
        {this.state.tiles.length ? (
          <List>
            {this.state.tiles.map(tiles => {
              console.log('tiles: ', tiles);
              return (
                <ListItem key={tiles._id}>
                  <div className="break-all pr-2">
                    {tiles.tileText}
                  </div>
                  <div className="whitespace-no-wrap">
                    <button
                      onClick={() => this.changeTileStatus(tiles._id, tiles.status)}
                      className={"activate-btn rounded px-2 py-1 mr-4 toggle " + (tiles.status === "active" ? "deactivate" : "activate")}>
                      {tiles.status === "active" ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => this.getThisTile(tiles._id)}
                      className="edit-btn rounded px-2 py-1 mr-4">
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
  } // ==> end renderTileEdit

  //RENDER TILE EDIT
  //====================================================
  renderTileEdit = (tile) => {
    //const tile = {tileText: "Jason"}
    //console.log(tile)
    return (
      <div className="w-full max">
        <form className="tile-form" onSubmit={this.saveThisTile}>
          <TextArea 
            name="tileText"
            placeholder="This is not a valid return if null"
            defaultValue={tile.tileText}
            onChange={this.handleInputChange}
            />
          <SubmitBtn />
        </form>
      </div>
    );
  }

  //CONDITIONALLY RENDER THE COMPONENTS
  //====================================================
  render() {
    return this.state.isInEditMode ? this.renderTileEdit(this.state.tileEdit) : this.renderDefaultView(this.state.tiles)
  };

} // ==> end class TilesView

//EXPORT
//=======================================================
export default TilesView;