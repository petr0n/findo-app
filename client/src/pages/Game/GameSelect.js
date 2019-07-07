import React, { Component } from "react";
import gameboardAPI from '../../utils/gameboardAPI';



//CONTENT
//=======================================================

class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: props.user, 
        gameboardId: ""
      }
  };
  

  async componentDidUpdate() {
    if (!this.state.gameboardId && this.props.user) {
      const response = await gameboardAPI.getGamesByUserAndStatus(this.props.user._id, "active");
      // const json = await response.data[0].json();
      console.log('GameSelect componentDidUpdate response: ', response);
      if (response.data.length) {
      const id = await response.data[0]._id;
        this.setState({ 
          gameboardId: id
        }); 
      }
    }
  }
  
  handleGameSelect = (gameType) => {
		this.props.handlePageChange("gameboard", this.props.user, gameType);
  }


  render() {
		const btnStyle = "cursor-pointer px-4 py-2 m-4 text-center inline-block";
    
    console.log('GameSelect this.props.user', this.props.user);
    return (
      <div>
        <div className="background mx-auto rounded px-3 py-10 w-11/12 text-center">
          {
            this.props.user ? 
            <div>You are logged in as {this.props.user.name}</div> : 
            ""
          }
          {
            this.state.gameboardId ? 
            <div>
                <div className={(btnStyle) + " hover_bg-red-300 text-brand-red phosphate text-3xl btn-double"} onClick={() => this.props.handlePageChange("gameboard", this.props.user, null, this.state.gameboardId)}>
                <div></div><div></div>
                Finish previous game
              </div>
              <div className="py-3">or start a new game</div>
            </div> : 
            ""
          }
          
          <div className="flex items-center justify-center">
            <div className={(btnStyle) + " hover_bg-orange-300 text-brand-orange phosphate text-xl btn-double-secondary"} onClick={() => this.handleGameSelect("PG")}><div></div><div></div>Kid Friendly Board</div>
            <div className={(btnStyle) + " hover_bg-orange-300 text-brand-orange phosphate text-xl btn-double-secondary"} onClick={() => this.handleGameSelect("R")}><div></div><div></div>Adult Style Board</div>
          </div>
        </div>
        {
          this.props.user ? 
          <div className="flex items-center justify-center" onClick={() => this.props.handlePageChange("suggesttile", this.props.user)}>
            <div className={(btnStyle) + " bg-white hover_bg-purple-300"}>Suggest a tile</div>
          </div> :
          ""
        }
      </div>
    );
  }
}

export default GameSelect;