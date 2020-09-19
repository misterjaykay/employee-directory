import React from "react";

export default function SearchResults(props) {
  return (
      <>
      {props.employee.map((result) => (
        <tr key={result.id.value}>
          <th className="text-center" scope="row">
            <img alt={result.name.first} src={result.picture.thumbnail} />
          </th>
          <td className="text-center">
            {result.name.first} {result.name.last}
          </td>
          <td className="text-center">{result.phone}</td>
          <td className="text-center"><a href={`mailto:${result.email}`}>{result.email}</a></td>
          <td className="text-center">{result.dob.date.substring(0, 10)}</td>
        </tr>
      ))}
      </>
  );
}
