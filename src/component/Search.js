import React from 'react';

function Search() {
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <input type="text" onChange={this.handleInputChange} className="form-control" placeholder="Search Here"/>
                </div>
            </form>
        </div>
    )
}

export default Search;