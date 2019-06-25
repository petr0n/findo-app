import axios from "axios";

export default {
    //TILES
    // Gets all tiles
    getTiles: function () {
        return axios.get("/api/tiles");
    },
    //GET tiles pending approval 
    getPendingTiles: function () {
        return axios.get("/api/tiles?status=Pending");
    },
    //GET tile by id
    getTile: function (id) {
        return axios.get("/api/tiles/" + id);
    },
    //UPDATE tile
    updateTile: function (id, tileData) {
        return axios.put("/api/tiles/" + id, tileData);
    },
    // DELETE tile by id
    deleteTile: function (id) {
        return axios.delete("/api/tiles/" + id);
    },
    // POST new tile
    createTile: function (tileData) {
        return axios.post("/api/tiles", tileData);
    }

};