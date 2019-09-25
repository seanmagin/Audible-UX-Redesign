import React, { Component } from "react";
import Table from "./Table";
import WebsiteHeader from "./WebsiteHeader";
import "../index.css";

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
      <div className="container">
        <WebsiteHeader />
        <Table characterData={characters} />
        <WebsiteHeader />
      </div>
    );
  }
}

export default App;
