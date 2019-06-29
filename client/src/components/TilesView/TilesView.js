//IMPORT
//=======================================================
import React from "react";
import "./TilesView.css";
import "./btnActivate";
import "./btnDeactivate";
import "./btnEdit";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
const TilesView = () => (
  <div className="bg-white">Tiles View</div>
);

//EXPORT
//=======================================================
export default TilesView;

//REQUIREMENTS

/*

TilesView (page 12, component to be passed to Admin => Home)
Description: retrieves all tiles from the db
Imports: React, btnActivate, btnDeactivate, btnEdit
Contains Files: 
btnActivate (activates the tile)
btnDeactivate (deactivates the tile)
btnEdit (shows TileEdit)

*/