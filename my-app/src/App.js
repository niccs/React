import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/message";
import Form from "./components/form";
import Nav from './components/nav';

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

        <div >
          <Nav />
        </div>



      </div >
    );
  }
}

export default App;
