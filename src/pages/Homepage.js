import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";

function Homepage() {
  const [employee, setEmployee] = useState([]);
  const [oneEmployee, setOneEmployee] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    API.getList("20")
      // .then(res => console.log(res.data.results))
      .then((res) => {
        setEmployee(res.data.results);
        setOneEmployee(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = ({ target }) => {
    console.log(target.value);
    let filter = target.value;
    // const filterOne = employee.filter(e => !e.includes(name));
    const filterOne = employee.filter(item => {
      let value = Object.values(item).join("").toLowerCase();
      return value.indexOf(filter.toLowerCase()) !== -1;
    });
    console.log(filterOne);
    setOneEmployee(filterOne);
  };

  // const handleInputChange = (event) => {
  //   const filter = event.target.value;
  //   const filteredList = employee.filter((e) => )
  //   console.log('list', employee)
    
  // };

  // /implement useEffect to watch for changes
  // useEffect(() => {
  //   const results = employee.filter((emp) => 
  //     ///compare the values of your downcased array of employees to the input
  //     emp.name.first.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setEmployee(results);
  // }, [searchTerm]);

  return (
    <Container fluid={""}>
      <Jumbotron fluid={""}/>
      <SearchForm handleInputChange={handleInputChange} />
      <Table employee={oneEmployee} />
    </Container>
  );
}

export default Homepage;
