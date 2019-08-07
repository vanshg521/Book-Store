import React, { Component } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import AllBook from "./components/AllBook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="addBookContainer">
          <AddBook />
        
        
          <AllBook />
        </div>
      </div>
    );
  }
}

export default App;
