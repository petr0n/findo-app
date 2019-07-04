import axios from "axios";

export default {

    //Check for a findo
    checkForFindo: function (id) {
        return axios.get("/api/checkWinner/" + id);
    }
}
