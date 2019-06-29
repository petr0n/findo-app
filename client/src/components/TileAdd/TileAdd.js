//IMPORT
//=======================================================
import React, { Component } from "react";
import { AdminWrapper } from  "../AdminWrapper/AdminWrapper";
import { TileAddBtn } from "../TileAdd/TileAddBtn";
import API from "../../utils/tileAPI";
import "./TileAdd.css";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
class TileAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileText: " ",
      createdBy: " "
    }
  }

  //handle user input change
  //====================================================
  handleInputChange = event => {
    const { name, value } = event.target; //get the value
    this.setState({  //update the input's state
      [name]: value
    });
  };// ==> end input change

  //handle user submit
  //====================================================
  handleFormSubmit = event => {
    event.preventDefault();//prevent default form submit 
    API.createTile({
      tileText: this.state.value,
      createdBy: this.state.userName
    })
    .then((res) => {
      console.log(res);
    })
    .catch(function(err) {
      //handle error
      console.log(err);
    });
  };// ==> end form submit 

  //render
  //====================================================
  render() {
    const { tileText } = this.state;
    return (
      <AdminWrapper>
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="tileText">
              Tile Copy:
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-auto"
                id="tileText"
                type="text-area"
                name="tileText"
                value={tileText}
                //maxLength="80"
                userName={this.createdBy}
                onChange={this.handleInputChange}
              />
              <p class="text-indigo-700 text-xs italic">Character Count 0 (max 80)</p>
            </div>
            <TileAddBtn class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
              disabled={!(this.state.tileText)} //prevent null submissions
              onClick={this.handleFormSubmit}
              >
            </TileAddBtn>
          </form>
        </div>
      </AdminWrapper>
    );
  }
} // ==> end class TileAdd

//EXPORT
//=======================================================
export default TileAdd;


//REQUIREMENTS
//=======================================================

/*

TileAdd (page 13, component to be passed to Admin => home)
Description: contains a form to create a tile by a user
Imports:React, Buttons
Contains a clickEvent that is a POST

*/