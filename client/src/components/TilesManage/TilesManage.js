// What this page does:
// Displays all pending tiles
// Give an option for Approve (this creates a new tile and updates the current tiles db, adding a new active tile)
// Gives an option for deny (this simply removes suggestion from suggestions db)

//IMPORT
//=======================================================
import React from "react";
import "./TilesManage.css";
import "./btnApprove";
import "./btnDeny";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
const TilesManage = () => (

  function getPendingTiles () {  // gets all Pending tiles
    return axios.get("/api/tiles?status=Pending");
  };

  handleApproveClick = () => {
    function createTile (req, res) {
      return axios.post("/api/tiles", tileData);
      db.Tile
          .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }).catch((error) => {
        console.log(error);
      });
  }
  handleDenyClick = () => {
    function deleteTile (req, res) {
      return axios.delete("/api/tiles/" + id);
      .then(response => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }



//EXPORT
//=======================================================
export default TilesManage;

//REQUIREMENTS
//=======================================================

/*

TilesManage (page 11, component to be passed to Admin =>)
Description: read from db a list of all tiles pending admin approval for use
Imports: React, btnDeny, btnApprove
Contains Files: 
btnDeny = PUT that changes the <value> of status (copy, paste status value)
btnApprove = PUT that changes the <value> of status (copy, paste status value)


*/