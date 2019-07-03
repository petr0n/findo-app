import axios from "axios";

export default {

    //GAMEBORAD

    //Start new Game
    createGame: function (gameInfo) {
        return axios.post("/api/gameboard", gameInfo);
    },
    // Gets the game with the given id
    getGame: function (id) {
        return axios.get("/api/gameboard/" + id);
    },
    //GET games for user based on user id and game status
    getGamesByUserAndStatus: function (userId, status) {
        return axios.get("/api/gameboard?userId=" + userId + "&status="+ status);
    },
    // Deletes the game with the given id
    deleteGame: function (id) {
        return axios.delete("/api/gameboard/" + id);
    },
    // Updates the game with the given id
    updateGame: function (id) {
        return axios.put("/api/gameboard/" + id);
    },
    // Updates tile to be checked
    updateGameTile: function (id, isChecked) {
        return axios.put("/api/gameboard/tile/" + id + "/" + isChecked);
    }
};