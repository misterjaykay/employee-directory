import React, { Component } from "react";
import API from "../utils/API";
import EmployeeDetail from "./EmployeeDetail";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Search from "./Search";

class EmployeeList extends Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    this.getAllEmployees("20");
  };

  getAllEmployees = query => {
    API.getApi(query)
    //   .then((res) => console.log("res", res.data.results))
      .then(res => this.setState({ results: res.data.results }))
      .then(console.log("success"))
      .catch((err) => console.log(err));
  }

  handleInputChange = ({ target }) => {
    let value = target.value;
    const name = target.name;
    
    this.setState({
      [name]:value
    });
  };

  render() {
      return(
        <Container>
            <Jumbotron />
            <Search />
            <EmployeeDetail results={this.state.results} />
        </Container>
      )
  }
}

export default EmployeeList;