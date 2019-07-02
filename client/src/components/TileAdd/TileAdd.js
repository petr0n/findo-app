import React, { Component } from "react";
import { TextArea, SubmitBtn } from "../Form";
import tileAPI from "../../utils/tileAPI";
import "./TileAdd.css";


class TileAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileText: "",
      createdBy: "5d178f7161ffbf2ff410ca4b"
    }
    //this.user = this.props.user
  }

  // test
  componentDidMount() {
    console.log("mounted")
  }

  //handle user input change
  //====================================================
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    });
  };

  //handle user submit
  //====================================================
  handleFormSubmit = event => {
    event.preventDefault();//prevent default form submit 
    tileAPI.createTile({
      tileText: this.state.tileText,
      createdBy: this.state.createdBy
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  //render
  //====================================================
  render() {
    return (
      <div className="w-full max-w-xs">
        <form className="tile-form">
          <TextArea 
            name="tileText"
            placeholder="Add tile suggestion here"
            value={this.state.tileText}
            onChange={this.handleInputChange}
            />
          <SubmitBtn
            onClick={this.handleFormSubmit}
          >Submit
          </SubmitBtn>
        </form>
      </div>
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