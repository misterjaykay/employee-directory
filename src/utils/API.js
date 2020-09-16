import axios from "axios";
const baseUrl = "https://randomapi.com/api/sv29b4cp?key=TX4H-8GTD-C4EH-BI2Z&results=20";

export default {
    getApi: function() {
    return axios.get(baseUrl) 
  }
}
