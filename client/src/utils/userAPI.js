import axios from "axios";

export default {

    //USERS
    // Gets all users
    //TODO UPDATE TO HAVE FIND OR CREATE
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the user with the given id
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    //updates the user with the id
    updateUser: function (id, userData) {
        return axios.put("/api/users/" + id, userData);
    },
    // Deletes the book with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    }

};