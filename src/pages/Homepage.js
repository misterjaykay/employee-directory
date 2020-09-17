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

    const handleInputChange = event => {
        console.log(event.target);
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