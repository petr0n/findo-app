import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import { TextArea, SubmitBtn } from "../Form";
import tileApi from "../../utils/tileAPI";
import "./TileAdd.css";
import "./index";
import "../../pages/Admin/Home";
import "../../pages/Game/SuggestTile";

//add radio for isAcitve Now (status: active)
//isRating

class TileAdd extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      tileText: "",
      createdBy: "5d178f7161ffbf2ff410ca4b",
      characterCount: this.countCharacters(80),
      isSubmitDisabled: true,
      isFormSubmitted: false
    }
    //this.user = this.props.user
  }

  componentDidMount() {
    
  }

  //handle user input change
  //====================================================
  handleInputChange = event => {
    const { name, value } = event.target;
    let total = 80 - event.target.value.length;
    // console.log('this.state.tileText.length', this.state.tileText.length)
    // console.log('total', total);
    if (total < 0 || total === 0) {
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
  handleFormSubmit = event => {
    event.preventDefault();//prevent default form submit 
    tileApi.createTile({
      tileText: this.state.tileText,
      createdBy: this.state.createdBy
    })
    .then(res => {
      console.log(res);
      this.setState({
        isFormSubmitted: true
      })
    })
    .catch(err => console.log(err));
    // window.location.reload()   
  };

  handlePageChange = (pageName) => {
    this.props.handlePageChange(pageName);
  };

  //render
  //===================================================
  render() {
    return (
      <div className="w-full">
        {this.state.isFormSubmitted ? 
        <p>Thanks for your submission.<br></br><button onClick={() => this.props.handlePageChange(this.home, this.state.user)} id="btn">Return to Home</button> <button onClick={() => this.props.handlePageChange("SuggestTile", this.state.user)} id="btn">Add Another Tile</button></p> :
        <form className="tile-form" onSubmit={this.handleFormSubmit}>
          <button onClick={() => this.props.handlePageChange(this.home, this.state.user)} id="btn">Return to Home</button> <button onClick={() => this.props.handlePageChange("SuggestTile", this.state.user)} id="btn">Add Another Tile</button>
          <TextArea 
            name="tileText"
            placeholder="Add tile suggestion here"
            value={this.state.tileText}
            onChange={this.handleInputChange}
            />
          <div className="radio">
            <label>
            <input id="radio" type="radio" value="option1" name="gameSelect" />Kid Friendly Tile<br></br>
            <input id="radio" type="radio" value="option2" name="gameSelect" /> Adult Tile
            </label>
          </div>
          <div className="w-full flex items-center justify-between">
            {this.state.characterCount}
            <SubmitBtn id="btn" isSubmitDisabled={this.state.isSubmitDisabled} />
          </div>
        </form>
        }
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
      redirect: false
  //setRedirect
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  }
  //renderRedirect
  renderRedirect = () => {
    if (this.state.redirect) {
      return  <Redirect to='/admin' />
    }
  }
  this.renderRedirect()
*/
