import React, { Component } from "react";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">My Space</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
