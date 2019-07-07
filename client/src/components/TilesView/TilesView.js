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

  // WHEN THE DOM IS LOADED CALL THE DEFAULT VIEW
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
      [name]: value,
    });
  };

  //API CALLS **************************************************

  // LOAD ALL NON-PENDING TILES
  //====================================================
  loadAllTiles = () => {
    tileApi.getTilesView({ }) 
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
        isPG: res.data.isPG,
        isR: res.data.isR,
        status: res.data.status,
        isInEditMode: true
      })
      console.log('res', res.data)}
      )
      .catch(err => console.log(err));
  };

  // UPDATE TILE === TEXT, RATING, STATUS
  //====================================================
  saveThisTile = (event) => {
    event.preventDefault();
    tileApi.updateTile(this.state.tileId, {
      tileText: this.state.tileText,
      isPG: this.state.isPG,
      isR: this.state.isR,
      status: this.state.status
    })
    .then(res => {
      this.setState({
        isInEditMode: false
      })
      this.loadAllTiles()
      }
    )
      .catch(err => console.log(err));
  };

  // UPDATE TILE: TILE STATUS
  //====================================================
  changeTileStatus = (id, status) => {
  console.log("the id is " + id)
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

  //RENDERING COMPONENTS**************************************************

  //RENDER DEFAULT VIEW
  //====================================================
  renderDefaultView = () => {
    return (
      <div className="list">
        <h1 className="list-inside bg-gray-200 text-center leading-loose tracking-wide text-2xl">Active and Inactive Tiles</h1>
        <br />
        {this.state.tiles.length ? (
          <List>
            {this.state.tiles.map(tiles => {
              return (
                <ListItem key={tiles._id}>
                  <div className="break-all pr-2">
                    {tiles.tileText}
                  </div>
                  <div className="whitespace-no-wrap">
                    <button
                      onClick={() => this.changeTileStatus(tiles._id, tiles.status)
                      }
                      className={"activate-btn rounded px-2 py-1 mr-4 toggle " + (tiles.status === "active" ? "deactivate" : "activate")}>
                      {tiles.status === "active" ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() =>
                        this.getThisTile(tiles._id)
                      }
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
    return (
      <div className="w-full max">
        <form className="tile-form" onSubmit={this.saveThisTile}>
          <TextArea 
            name="tileText"
            placeholder="This is not a valid return if null"
            defaultValue={tile.tileText}
            onChange={this.handleInputChange}
            />
          <div>
            <h2 className="leading-loose tracking-wide text-2xl">Review tile rating</h2>
            <div>
              <h3>isPG</h3>
              <select name="isPG" defaultValue={tile.isPG} onChange={this.handleInputChange}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <br />
            <div>
              <h3>isR</h3>
              <select name="isR" defaultValue={tile.isR} onChange={this.handleInputChange}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <br />
            <div>
              <h3>Status</h3>
              <select name="status" defaultValue={tile.status} onChange={this.handleInputChange}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <br />
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