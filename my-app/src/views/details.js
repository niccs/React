import React, { Component } from "react";

export default class Form extends Component {
  changeName = e => {
    e.preventDefault();
    let nameFromForm = this.refs.name;
    let nameFromFormVal = nameFromForm.value;
    let messageFromForm = this.refs.message.value;
    let updates = {};
    if (typeof nameFromFormVal == "string" && nameFromFormVal.length > 0) {
      nameFromForm.value = "";
      updates.name = nameFromFormVal;
      updates.message = messageFromForm;
    }
    this.props.onUpdate(updates);
  };


  
  render() {
    return (
      <div className="App">
        <form onSubmit={this.changeName}>
          <div>
            <input type="text" ref="name" />
          </div>
          <div>
            <textarea ref="message" /><br />
          </div>
          <div>
            <button> Submit </button>
          </div>
          <div>
            <button onclick="myFunction()">About Art Exhibition</button>
          </div>
          <div>
            <button onclick="myFunction()"> Art Works</button>
          </div>
        </form>
      </div>
    );
  }
}
