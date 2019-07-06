import React, { Component } from "react";
import gameboardAPI from '../../utils/gameboardAPI';



//CONTENT
//=======================================================

class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        gameboardId: ""
      }
  };
  

  async componentDidUpdate() {
    if (!this.state.gameboardId) {
      const response = await gameboardAPI.getGamesByUserAndStatus(this.props.user._id, "active");
      // const json = await response.data[0].json();
      this.setState({ 
        gameboardId: response.data[0]._id
      }); 
    }
  }
  
  handleGameSelect = (gameType) => {
		this.props.handlePageChange("gameboard", this.props.user, gameType);
  }


  render() {
		const btnStyle = "cursor-pointer rounded bg-white border border-purple-500 px-4 py-2 m-4 text-center hover_bg-orange-300 hover_border-orange-600";
    
    console.log('GameSelect this.props.user', this.props.user);
    return (
      <div>
        <div className="background mx-auto rounded px-3 py-10 w-full text-center">
          {
            this.props.user ? 
            <div>Welcome back {this.props.user.name}!</div> : 
            ""
          }
          {
            this.state.gameboardId ? 
            <div>
              <div className={(btnStyle) + " inline-block"} onClick={() => this.props.handlePageChange("gameboard", this.props.user, null, this.state.gameboardId)}>Finish previous game</div>
              <div className="text-sm my-3">or start a new game</div>
            </div> : 
            ""
          }
          <div className=" flex items-center justify-center">
            <div className={btnStyle} onClick={() => this.handleGameSelect("PG")}>Kid-friendly Board</div>
            <div className={btnStyle} onClick={() => this.handleGameSelect("R")}>Adult style Board</div>
          </div>
        </div>
        <div className="flex items-center justify-center" onClick={() => this.props.handlePageChange("suggesttile", this.props.user)}>
          <div className={btnStyle}>Suggest a tile</div>
        </div>
      </div>
    );
  }
}

export default GameSelect;