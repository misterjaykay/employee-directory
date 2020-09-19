import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";

function Homepage() {
  const [employee, setEmployee] = useState([]);
  const [oneEmployee, setOneEmployee] = useState([]);
  const [order, setOrder] = useState("descend");
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    API.getList("20")
      // .then(res => console.log(res.data.results))
      .then((res) => {
        setEmployee(res.data.results);
        setOneEmployee(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = ({ target }) => {
    // console.log(target.value);
    let filter = target.value;
    // const filterOne = employee.filter(e => !e.includes(name));
    const filterOne = employee.filter(item => {
      let value = Object.values(item).join("").toLowerCase();
      return value.indexOf(filter.toLowerCase()) !== -1;
    });
    // console.log(filterOne);
    setOneEmployee(filterOne);
  };

  const handleIconClick = event => {

    order === "descend" ? setOrder("ascend") : setOrder("descend")
    console.log(order);
    if (order === "descend") {
      const sortArr = employee.sort(function(a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      console.log(sortArr);
      setOneEmployee(sortArr);
    } else {
      const sortArr = employee.sort(function(a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      });
      console.log(sortArr);
      setOneEmployee(sortArr);
    }

  }

  return (
    <Container fluid={""}>
      <Jumbotron fluid={""}/>
      <SearchForm 
      handleInputChange={handleInputChange} />
      <Table 
      handleIconClick={handleIconClick}
      employee={oneEmployee}
       />
    </Container>
  );
}

export default Homepage;
