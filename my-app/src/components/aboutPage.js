import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Message from "./message";
import Form from "./form";

class About extends Component {
  state = {
    name: this.props.name,
    message: this.props.message
  };

  handleUpdates = updates => {
    this.setState({
      name: updates.name,
      message: updates.message
    });
  };

  render() {
    var name = this.state.name;
    return (

      <div className="App">
        <h1>This is abouts page </h1>
      </div >
    );
  }
}

export default About;
