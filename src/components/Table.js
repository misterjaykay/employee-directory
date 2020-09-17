import React from 'react';
import SearchResults from './SearchResults';

export default function Table(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <SearchResults employee={props.employee}/>
            </tbody>
        </table>
   
    )
}
