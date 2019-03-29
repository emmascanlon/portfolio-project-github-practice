import React, { Component } from 'react';
import Navbar from "./Navbar";
import './App.css';
import Home from "./Home"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Home />
      </div>
    );
  }
}

export default App;
