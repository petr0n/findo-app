import React, {Component} from "react";
import "./TilesManage.css";
// import "./Tile.js";
// import "./Buttons/btnActivate";
// import "./Buttons/btnDeactivate";
// import ".Buttons/btnEdit";
import tileApi from "../../utils/tileAPI";

class TilesManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileText: " ",
    }
  }

    loadPendingTiles = () => {
      tileApi.getPendingTiles()
        .then(res =>
          this.setState({ tiles: res.data })
        )
        .catch(err => console.log(err));
    };

    componentDidMount() {
      this.loadPendingTiles();
    }

  render() {
    // const { tileText } = this.state;
    return (
      <div>
        <h2 className="text-2xl mb-4">Tiles Manage</h2>
        {/* List goes here */}
      </div>
    )
  }
} 
  
//EXPORT
//=======================================================
export default TilesManage;

