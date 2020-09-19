import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";
import Row from "../components/Row";
import Col from "../components/Col";

function Homepage() {
  const [employee, setEmployee] = useState([]);
  const [oneEmployee, setOneEmployee] = useState([]);
  const [order, setOrder] = useState("descend");

  useEffect(() => {
    API.getList("20")
      .then((res) => {
        setEmployee(res.data.results);
        setOneEmployee(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = ({ target }) => {
    let filter = target.value;
    const filterOne = employee.filter((item) => {
      let value = Object.values(item).join("").toLowerCase();
      return value.indexOf(filter.toLowerCase()) !== -1;
    });
    setOneEmployee(filterOne);
  };

  const handleNameIconClick = (event) => {
    order === "descend" ? setOrder("ascend") : setOrder("descend");
    // console.log(order);
    if (order === "descend") {
      const sortArr = employee.sort(function (a, b) {
        var textA = a.email.toUpperCase();
        var textB = b.email.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      console.log(sortArr);
      setOneEmployee(sortArr);
    } else {
      const sortArr = employee.sort(function (a, b) {
        var textA = a.email.toUpperCase();
        var textB = b.email.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
      });
      console.log(sortArr);
      setOneEmployee(sortArr);
    }
  };

  const handleEmailIconClick = (event) => {
    order === "descend" ? setOrder("ascend") : setOrder("descend");
    // console.log(order);
    if (order === "descend") {
      const sortArr = employee.sort(function (a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      console.log(sortArr);
      setOneEmployee(sortArr);
    } else {
      const sortArr = employee.sort(function (a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
      });
      console.log(sortArr);
      setOneEmployee(sortArr);
    }
  };

  return (
    <>
      <Jumbotron fluid="fluid" />
      <Container>
        <Row>
          <Col size="md-6">
            <SearchForm 
              handleInputChange={handleInputChange} 
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Table 
              handleNameIconClick={handleNameIconClick} 
              handleEmailIconClick={handleEmailIconClick}
              employee={oneEmployee} 
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
