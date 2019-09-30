import React, { Component } from "react";

class BookItem extends Component {
  render() {
    return (
      <div className="card">
        <a href="#">
          <img className="card-img-top" src="..." alt="card img" />
          <div className="card-body">
            <h5>Book Title</h5>
            <p>Author Name</p>
          </div>
        </a>
      </div>
    );
  }
}

class BookGroup extends Component {
  render() {
    const items = [];

    for (let i = 0; i < 6; i++) {
      items.push(<BookItem key={i} />);
    }

    const GroupHeading = props => {
      return { props };
    };

    return (
      <div className={`row book-group ${this.props.utilities}`}>
        <div class="col-sm-12">
          <h3>{this.props.title}</h3>
          <div className="card-deck">{items}</div>
        </div>
      </div>
    );
  }
}

export default BookGroup;
