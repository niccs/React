import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Message from "./message";
import Form from "./form";

class Home extends Component {
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
        <Form onUpdate={this.handleUpdates} />

        <Message message={this.state.message} />
        <div>
          <button onclick="myFunction()">About Art Exhibition</button>
        </div>
        <div>
          <button onclick="myFunction()"> Art Works</button>
        </div>
      </div >
    );
  }
}

export default Home;
