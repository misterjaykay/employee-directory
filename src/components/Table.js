import React from 'react';
import SearchResults from './SearchResults';

export default function Table(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th className="text-center" scope="col">Photo</th>
                <th className="text-center" scope="col">Name 
                    <i onClick={() => props.handleNameIconClick()} className="fas fa-sort"></i>
                </th>
                <th className="text-center" scope="col">Phone</th>
                <th className="text-center" scope="col">Email
                    <i onClick={() => props.handleEmailIconClick()} className="fas fa-sort"></i>
                </th>
                <th className="text-center" scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <SearchResults employee={props.employee}/>
            </tbody>
        </table>
   
    )
}
