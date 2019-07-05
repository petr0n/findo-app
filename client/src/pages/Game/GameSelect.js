import React, { Component } from "react";
import gameboardAPI from '../../utils/gameboardAPI';



//CONTENT
//=======================================================

class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: this.props.user,
        loggedIn: this.props.loggedIn,
        gameboardAPI: ""
      }
  };
  
  componentDidMount(){
    console.log('GameSelect this.state.loggedIn: ', this.state.loggedIn);
    // if (this.props.user){
    //   this.getUserGame(this.props.user._id);
    // }
  }
  
  handleGameSelect = (gameType) => {
		this.props.handlePageChange("gameboard", this.props.user, this.props.loggedIn, gameType);
  }

  getUserGame = (userId) => {
    gameboardAPI.getGamesByUserAndStatus(userId, "active")
    .then(res => {
      console.log('GameSelect getUserGame res: ', res.data[0]._id);
      if (res.data[0]) {
       this.setState({ 
         gameboardId: res.data[0]._id
        }) 
      }
   })
   .catch(err => console.log(err));
 }
  
  selectPreviousGame = () => {
    const userData = this.props.user;
    this.getUserGame(userData._id); 
    console.log('GameSelect gameboardId: ', this.state.gameboardId);

    return (
      <div>Welcome back {userData.name}!! 
        {this.state.gameboardId ? 
        <div className="guest login-text cursor-pointer mb-4" onClick={() => this.handleGameSelect()}>
          Finish your last game <i className="fas"></i>
        </div> : 
        <div>No previous game</div>
        }
      </div> 
    )
  }


  render() {
		const btnStyle = "cursor-pointer rounded bg-white border border-purple-500 px-4 py-2 m-4 flex items-center text-center hover_bg-orange-300";
		console.log('GameSelect this.props.user', this.props.user);
    return (
      <div>
        <div className="background mx-auto rounded px-3 py-10 text-center">
          {this.props.user ? this.selectPreviousGame() : ""}
          <div className="w-full flex items-center justify-center">

            <div className={btnStyle} onClick={() => this.handleGameSelect("PG")}>Kid Friendly Board</div>
            <div className={btnStyle} onClick={() => this.handleGameSelect("R")}>Adult Style Board</div>
          </div>
        </div>
        <div className="flex items-center justify-center" onClick={() => this.props.handlePageChange("suggesttile", this.props.user, this.props.loggedIn)}>
          <div className={btnStyle}>Suggest a tile</div>
        </div>
      </div>
    );
  }
}

export default GameSelect;