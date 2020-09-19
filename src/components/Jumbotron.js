import React from 'react';

export default function Jumbotron(props) {
    return (
        <div className={`jumbotron jumbotron${props.fluid ? "-fluid" : ""} bg-primary text-light text-center`}>
            <div className="container">
                <h1 className="mb-2" >Employee Directory</h1>
                <p className="mb-0">Welcome to Employee Directory.</p><p> Feel free to browse company's employees list.</p>
            </div>
        </div>
    )
}
