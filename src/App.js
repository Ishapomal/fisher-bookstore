import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import { BrowserRouter as Routes } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render(){
    return(
      <div className="App Container">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand>
            <Link to="/">Fisher Bookstore</Link>
          </Navbar.Brand>
        </Navbar>
        <Routes />
      </div>
    );
  }
}