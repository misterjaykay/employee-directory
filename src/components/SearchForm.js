import React from 'react';

export default function SearchForm(props) {
    return (
            <form className="search">
                <div className="form-group">
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="employee"
                        list="employee"
                        type="text"
                        className="form-control"
                        placeholder="Search Employees Here"
                        id="employee"
                    />
                </div>
            </form>

        
    )
}
