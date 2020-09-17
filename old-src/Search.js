import React from 'react';

function Search(props) {
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <input type="text" name="search" onChange={props.handleInputChange} className="form-control" placeholder="Search Here"/>
                </div>
            </form>
        </div>
    )
}

export default Search;