import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import Container from "../components/Container";
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import Table from '../components/Table';

function Homepage() {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        API.getLists("20")
        // .then(res => console.log(res.data.results))
        .then(res => setEmployee(res.data.results))
        .catch(err => console.log(err));
    }, [])

    const handleInputChange = ({ target }) => {
        console.log(target.value);
        let name = target.value;
        // const filterOne = employee.filter(e => !e.includes(name));
        const filterOne = employee.filter(e => e.name.first.includes(name))
        console.log(filterOne);
        setEmployee(filterOne);
    }

    return(
        <Container>
            <Jumbotron />
            <SearchForm handleInputChange={handleInputChange}/>
            <Table employee={employee}/>
        </Container>
    )
}

export default Homepage;