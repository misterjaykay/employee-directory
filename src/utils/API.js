import axios from "axios";
const baseUrl = "https://randomuser.me/api/?nat=us&results=";

export default {
    getList: function(query) {
    return axios.get(baseUrl + query) 
  }
}
