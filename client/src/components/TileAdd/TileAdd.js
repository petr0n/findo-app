import React, { Component } from "react";

import { TextArea, SubmitBtn } from "../Form";
import tileApi from "../../utils/tileAPI";
import "./TileAdd.css";
import "./index";
import "../../pages/Admin/Home";
import "../../pages/Game/SuggestTile";


class TileAdd extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      tileText: "",
      createdBy: this.props.user ? this.props.user._id : "5d178f7161ffbf2ff410ca4b",
      characterCount: this.countCharacters(80),
      isSubmitDisabled: true,
      isFormSubmitted: false,
      isPG: this.props.isPublic ? true : false,
      isR: false,
      statusCheckbox: true,
      tileStatus: this.props.isPublic ? "pending" : "active",
      ratingIsPg: true,
      ratingIsR: false,
      isPublic: this.props.isPublic ? true : false
    }
  }

  //handle user input change
  //====================================================
  handleInputChange = event => {
    const { name, value } = event.target;
    let total = 80 - event.target.value.length;
    if (total < 0 || event.target.value.length === 0) {
      this.setState({ isSubmitDisabled: true });
    } else {
      this.setState({ isSubmitDisabled: false });
    }
    this.setState({ 
      [name]: value,
      characterCount: this.countCharacters(total)
    });
  };
  
  countCharacters = (total) => {
    return (<p className={"char-ctr text-xs italic " + (total < 10 ? "text-red-500" : "text-indigo-700")}>Character Count {total} (max 80)</p>);
  }

  //handle user submit
  //====================================================
  handleFormSubmit = (event) => {
    event.preventDefault();//prevent default form submit 
    // console.log('this.state: ', this.state)
    tileApi.createTile({
      tileText: this.state.tileText,
      createdBy: this.state.createdBy,
      isPG: this.state.isPG,
      isR: this.state.isR,
      status: this.state.tileStatus
    })
    .then(res => {
      console.log(res);
      this.setState({
        isFormSubmitted: true
      })
    })
    .catch(err => console.log(err));
  };


  handleRadioChange = (e) => {
    this.setState({ [e.target.id]: true });
    if (e.target.id === "isPG") {
      this.setState({ 
        isPG: true,
        ratingIsPg: true,
        ratingIsR: false
      });
    } else if (e.target.id === "isR") {
      this.setState({ 
        isR: true,
        isPG: false,
        ratingIsR: true,
        ratingIsPg: false
      });
    }
  }

  handleCheckbox = (e) => {
    this.setState({statusCheckbox: !this.state.statusCheckbox}); //look at the !NOT sign
    let newTileStatus = this.state.statusCheckbox ? "inactive" : "active";
    this.setState({ tileStatus: newTileStatus });
  }

  handleReload = () => {
    this.setState({  // reset all values 
      isFormSubmitted: false,
      tileText: "",
      characterCount: this.countCharacters(80),
      isSubmitDisabled: true,
      isPG: true,
      isR: false,
      statusCheckbox: true,
      tileStatus: "active",
      ratingIsPg: true,
      ratingIsR: false
    });
    this.props.handleNavClick("addtile");
  }

  //render
  //===================================================
  render() {
    const isStatusChecked = this.state.statusCheckbox;
    const ratingIsPg = this.state.ratingIsPg;
    const ratingIsR = this.state.ratingIsR;

    return (
      <div className="w-full">
        {this.state.isFormSubmitted ? 
        <div className="text-center">Thanks for your submission. <br></br>
          {
            this.state.isPublic ?
            <div id="button-div" className="flex items-center justify-center">
              <div className="btn-double text-lg cursor-pointer my-10 text-brand-orange text-center p-3 phosphate" onClick={() => this.props.handlePageChange("gameselect", this.state.user)}>
                <div></div><div></div>Back
              </div> 
            </div>
            :
            <div id="button-div" className="flex items-center justify-center">
              <div className="btn-double text-lg cursor-pointer my-10 text-brand-orange text-center p-3 phosphate" onClick={this.handleReload}>
                <div></div><div></div>Add Another Tile
              </div>
            </div> 
          }
        </div>  :
        <form className="tile-form" onSubmit={this.handleFormSubmit}>
          <TextArea 
            name="tileText"
            placeholder="Tile text"
            value={this.state.tileText}
            onChange={this.handleInputChange} />
          <div className="w-full flex items-center justify-between mb-3">
            {this.state.characterCount}
          </div>
          {
            !this.state.isPublic ? 
            <div className="flex flex-row items-center justify-between w-full mb-5">
              <label className="text-xs flex items-center justify-start">
                <input type="checkbox" onChange={this.handleCheckbox} id="status" value="active" checked={isStatusChecked} />&nbsp;&nbsp;Activate immediately
              </label>
              <div className="flex items-center justify-center">
                <div className="text-xs mr-2">Tile Rating:</div>
                <input type="radio" id="isPG" name="gameSelect" onChange={this.handleRadioChange} checked={ratingIsPg} />
                <label htmlFor="isPG" className="text-xs mr-3">&nbsp;PG</label>
                <input type="radio" id="isR" name="gameSelect" onChange={this.handleRadioChange} checked={ratingIsR} />
                <label htmlFor="isR" className="text-xs">&nbsp;R</label>
              </div>
            </div> :
            ""
          }
          <SubmitBtn id="btn" isSubmitDisabled={this.state.isSubmitDisabled} />
        </form>
        }
      </div>
    );
  }
}


//EXPORT
//=======================================================
export default TileAdd;
