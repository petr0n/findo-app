import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import { TextArea, SubmitBtn } from "../Form";
import tileApi from "../../utils/tileAPI";
import "./TileAdd.css";


class TileAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileText: "",
      createdBy: "5d178f7161ffbf2ff410ca4b",
      characterCount: this.countCharacters(80),
      isSubmitDisabled: true
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
    .then(res => console.log(res))
    .catch(err => console.log(err));
    // window.location.reload()
  };



  //render
  //====================================================
  render() {
    return (
      <div className="w-full">
        <form className="tile-form">
          <TextArea 
            name="tileText"
            placeholder="Add tile suggestion here"
            value={this.state.tileText}
            onChange={this.handleInputChange}
            />
          <div className="w-full flex items-center justify-between">
            {this.state.characterCount}
            <SubmitBtn isSubmitDisabled={this.state.isSubmitDisabled} onClick={this.handleFormSubmit}>Submit</SubmitBtn>
          </div>
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