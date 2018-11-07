import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./Components/index";
import Auth from "./Components/Auth/Auth";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <Auth path="login" keyword="login" />
          <Auth path="register" keyword="register" />
        </Router>
      </div>
    );
  }
}

export default App;
