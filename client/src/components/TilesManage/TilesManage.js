//IMPORT
//=======================================================
import React, { Component } from "react";
import tileApi from "../../utils/tileAPI";
import "./TilesManage.css"
import { TextArea, SubmitBtn, Rating } from "../Form";
import { List, ListItem } from "../TileList";

//CONTENT 
//=======================================================
class TilesManage extends Component {
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
    this.loadPendingTiles();
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
  loadPendingTiles = () => {
    tileApi.getPendingTiles({ }) 
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
        isInEditMode: true
      })
      console.log('res', res.data)}
      )
      .catch(err => console.log(err));
  };

  // UPDATE TILE === TILE TEXT UPDATE
  //====================================================
  saveThisTile = (event) => {
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


  //RENDERING COMPONENTS**************************************************

  //RENDER DEFAULT VIEW
  //====================================================
  renderDefaultView = () => {
    return (
      <div className="list">
        <h1 className="list-inside bg-gray-200 text-center leading-loose tracking-wide text-2xl">Tiles Pending Admin Review</h1>
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
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() =>
                        this.getThisTile(tiles._id)
                      }>
                      Review <i className="far fa-arrow-alt-circle-right" />
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
          <Rating>
            <h2 className="leading-loose tracking-wide text-2xl">Review tile rating</h2>
            <input
            name="isPG"
            type="checkbox"
            value={tile.isPG}
            defaultChecked={this.state.isPG}
            onChange={this.handleInputChange}
            />  Is PG?
            <br />
            <input 
            name="isR"
            type="checkbox"
            value={tile.isR}
            defaultChecked={this.state.isR}
            onChange={this.handleInputChange}
            />  Is R?
          </Rating>
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
export default TilesManage;