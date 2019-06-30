import React, {Component} from "react";
import "./TilesView.css";
import "./Tile.js";
import "./Buttons/btnActivate";
import "./Buttons/btnDeactivate";
import ".Buttons/btnEdit";
import tileApi from "../../utils/tileAPI";
import AdminWrapper from "../AdminWrapper/AdminWrapper";

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
      const { tileText } = this.state;
      return (
        <AdminWrapper>
{/* List goes here */}

        </AdminWrapper>
      );
    }
  } // ==> end class TileAdd
  
  //EXPORT
  //=======================================================
  export default TilesManage;

