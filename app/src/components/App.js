import React, { Component } from "react";
import Table from "./Table";
import WebsiteHeader from "./WebsiteHeader";
import SearchBar from "./SearchBar";
import BookGroup from "./BookGroup";
import "../index.css";
import "../styles/stylesheet.css";

class App extends React.Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Designer"
      },
      {
        name: "John",
        job: "Developer"
      },
      {
        name: "Jane",
        job: "Developer"
      },
      {
        name: "Max",
        job: "CEO"
      }
    ];

    return (
      <div>
        <WebsiteHeader />
        <div className="container">
          <SearchBar />
          <BookGroup heading="Recommended" cat="recommended" utilities="mb-5" />
          <BookGroup heading="Exciting new reads" cat="new" utilities="mb-5" />
          <BookGroup heading="Bestsellers" cat="bestsellers" utilities="mb-5" />
        </div>
      </div>
    );
  }
}

export default App;
