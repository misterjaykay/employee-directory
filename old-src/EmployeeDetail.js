import React from 'react';

function EmployeeDetail(props) {
    return(
        <div>
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
        {props.results.map(result => (
                <tr>
                <th scope="row" key={result.id.value}><img alt={result.name.first} src={result.picture.thumbnail}/></th>
                <td>{result.name.first} {result.name.last}</td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{result.dob.date.substring(0,10)}</td>
                </tr>
        ))}
        </tbody>
        </table>
    </div>
        // <div className="text-center">
        //     {props.results.map(result => (
        //         <p key={result.id.value}>{result.name.first}{result.name.last}</p>
        //     ))}
        // </div>
    )
}
export default EmployeeDetail;