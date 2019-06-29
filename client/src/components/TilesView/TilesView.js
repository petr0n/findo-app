// What this page does:
// This page displays all tiles
// Gives an option to Edit a tile (this take you to the tileEdit component)
// Gives and option to deactivate a tile (this updates the status of the tile)
// Give an option to activate a tile (this updates the status of the tile) 

//IMPORT
//=======================================================
import React, {Component} from "react";
import "./TilesView.css";
import "./Tile.js";
import "./Buttons/btnActivate";
import "./Buttons/btnDeactivate";
import ".Buttons/btnEdit";

const db = require("../models");

module.exports = {

    // Find all tiles
    findAllTiles: function (req, res) {
        db.Tile
            .find(req.query)
            .populate("createdBy")
            .populate("approvedBy")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

  }
  
  // create a list to put the tile names and info in
	makeTileList = () => {
		let tiles = db.Tile;
		for(let i = 0;i < 25; i++){
			if (status === active) { // if the tile is currently active, render the deactivate button on the list
				render () 
          return {
              btnDeactivate
          }
			}
      else { // if the tile is currently deactive, render the activate button on the list
          return {
            btnActivate
          }
      }
		}
		console.log('tiles', tiles); // return the tiles
		return tiles;
	};

	renderList = () => { // render the list
		this.setState({ 
			tiles: this.makeTileList() 
		});
	};

	componentDidMount() {
    this.renderList();
  };

  // Click Handlers

  handleDeactivateClick = () => {
    function updateTile (req, res) {
      return axios.put("/api/tiles/" + id, tileData);
      db.Tile
          .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }).catch((error) => {
        console.log(error);
      });
  }
  handleActivateClick = () => {
    function updateTile (req, res) {
      return axios.put("/api/tiles/" + id, tileData);
      .then(response => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }
  handleEditClick = () => {
    render () {
      return (
        tileEdit
      )}
      }).catch((error) => {
        console.log(error);
      };
window.onload(console.log(db.Tile));

  



