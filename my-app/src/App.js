import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/message";
import Form from "./components/form";

class App extends Component {
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {name}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form onUpdate={this.handleUpdates} />

        <Message message={this.state.message} />
        <div>
          <button onclick="myFunction()">About Art Exhibition</button>
        </div>
        <div>
          <button onclick="myFunction()"> Art Works</button>
        </div>
      </div>
    );
  }
}

export default App;
