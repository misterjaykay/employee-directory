import React from "react";

export default function SearchResults(props) {
  return (
    <tbody>
      {props.results.map((result) => (
        <tr>
          <th scope="row" key={result.id.value}>
            <img alt={result.name.first} src={result.picture.thumbnail} />
          </th>
          <td>
            {result.name.first} {result.name.last}
          </td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{result.dob.date.substring(0, 10)}</td>
        </tr>
      ))}
    </tbody>
  );
}
