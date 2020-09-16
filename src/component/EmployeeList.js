import React, { Component } from "react";
import API from "../utils/API"

class EmployeeList extends Component {
  state = {
    result: {},
    search: "",
  };

  componentDidMount = (query) => {
    console.log("query", query);
    API.getApi(query)
      .then((res) => console.log("res", res))
      .catch((err) => console.log(err));
  };

  render() {
      return(
          <div>
              <p></p>
          </div>
      )
  }
}

export default EmployeeList;