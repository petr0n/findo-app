//IMPORT
//=======================================================
import React, { Component } from "react";
import TileEditBtn from "./TileAddBtn";
import tileAPI from "../../utils/tileAPI";
import "./TileEdit.css";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
class TileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileText: " ",
    } 
  }

  // display the tile
  //====================================================
  componentDidMount() {
    this.loadTile();
  }

  // load the tile
  //====================================================
  loadTile = () => {
    tileAPI.getTile()
    .then(res =>
      this.setState({ tileText: res.data })
    )
    .catch(err => console.log(err));
  }

  //handle user input change
  //====================================================
  handleInputChange = event => {
    const { name, value } = event.target; //get the value
    this.setState({  //update the input's state
      [name]: value
    });
  };

  //handle user submit
  //====================================================
  handleFormSubmit = event => {
    event.preventDefault();//prevent default form submit 
    tileAPI.updateTile({
      tileText: this.state.value
    })
    .then((res) => {
      console.log(res);
    })
    .catch(function(err) {
      //handle error
      console.log(err);
    });
  };

  //render
  //====================================================
  render() {
    //const { tileText } = this.state;
    return (
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="tileText">
            Tile Copy:
            </label>
            <input rows="20" col="5"class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-auto"
              id="tileText"
              type="text-area"
              name="tileText"
              value={this.state.tileText}
              //maxLength="80"
              onChange={this.handleInputChange}
            />
            <p class="text-indigo-700 text-xs italic">Character Count 0 (max 80)</p>
          </div>
          <TileEditBtn
            disabled={!(this.state.tileText)} //prevent null submissions
            onClick={this.handleFormSubmit}
            >
            Save
          </TileEditBtn>
        </form>
      </div>
    );
  }
} // ==> end class TileAdd

//EXPORT
//=======================================================
export default TileEdit;