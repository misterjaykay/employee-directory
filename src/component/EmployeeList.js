import React, { Component } from "react";
import API from "../utils/API";
import EmployeeDetail from "./EmployeeDetail";

class EmployeeList extends Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    this.searchEmployees("20");
  };

  searchEmployees = query => {
    API.getApi(query)
    //   .then((res) => console.log("res", res.data.results))
      .then(res => this.setState({ results: res.data.results }))
      .then(console.log("success", this.state.results))
      .catch((err) => console.log(err));
  }


  render() {
      return(
        <EmployeeDetail
            results={this.state.results}
            // name={this.state.result.results[0].name}
            // phone={this.state.result.results[0].phone}
        />
      )
  }
}

export default EmployeeList;