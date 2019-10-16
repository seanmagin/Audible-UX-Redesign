import React, { Component } from "react";

class BookItem extends Component {
  render() {
    const catalogue = [
      {
        BookTitle: "Lord of the Rings: The Fellowship of the Ring",
        Series: "The Lord of the Rings",
        BookNumber: "1",
        AuthorFirstName: "J.R.R",
        AuthorLastName: "Tolkien",
        Genre: "High Fantasy",
        tags: "bestsellers"
      },
      {
        BookTitle: "Lord of the Rings: The Two Towers",
        Series: "The Lord of the Rings",
        BookNumber: "2",
        AuthorFirstName: "J.R.R",
        AuthorLastName: "Tolkien",
        Genre: "High Fantasy",
        tags: "bestsellers"
      },
      {
        BookTitle: "Lord of the Rings: The Return of the King",
        Series: "The Lord of the Rings",
        BookNumber: "3",
        AuthorFirstName: "J.R.R",
        AuthorLastName: "Tolkien",
        Genre: "High Fantasy",
        tags: "bestsellers"
      },
      {
        BookTitle: "Eragon",
        Series: "Inheritance Cycle",
        BookNumber: "1",
        AuthorFirstName: "Christopher",
        AuthorLastName: "Paolini",
        Genre: "Fantasy",
        tags: "new"
      },
      {
        BookTitle: "Eldest",
        Series: "Inheritance Cycle",
        BookNumber: "2",
        AuthorFirstName: "Christopher",
        AuthorLastName: "Paolini",
        Genre: "Fantasy",
        tags: "new"
      },
      {
        BookTitle: "Brisingr",
        Series: "Inheritance Cycle",
        BookNumber: "3",
        AuthorFirstName: "Christopher",
        AuthorLastName: "Paolini",
        Genre: "Fantasy",
        tags: "recommended"
      },
      {
        BookTitle: "Inheritance",
        Series: "Inheritance Cycle",
        BookNumber: "4",
        AuthorFirstName: "Christopher",
        AuthorLastName: "Paolini",
        Genre: "Fantasy"
      }
    ];

    const categoryGroup = this.props.cat;

    const books = catalogue
      .filter(book => book.tags === categoryGroup)
      .map((book, index) => {
        return (
          <div className="col-4 col-sm-2 book-single">
            <a href="#">
              <img
                className="card-img-top"
                src="/assets/book-placeholder.svg"
                alt="card img"
              />
              <h5>{book.BookTitle}</h5>
              <p>
                {book.AuthorFirstName} {book.AuthorLastName}
              </p>
            </a>
          </div>
        );
      });

    return <div className="row">{books}</div>;
  }
}

class BookGroup extends Component {
  render() {
    const items = [];

    return (
      <div className={`row book-group ${this.props.utilities}`}>
        <div className="col-sm-12">
          <h3>{this.props.heading}</h3>
          <BookItem cat={this.props.cat} />
        </div>
      </div>
    );
  }
}

export default BookGroup;
