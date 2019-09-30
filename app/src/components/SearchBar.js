import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="input-group mb-3">
            <div className="input-group-append">
              <button className="btn btn-outline text-white" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <input
              type="text"
              className="form-control bg-dark"
              placeholder="Discover Something New"
              aria-label="Discover Something New"
              aria-describedby="search book input"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
