import React from "react";

const Message = props => {
  return (
    <div className="App">
      <p className="App-intro">
        Trying to see a presentation component(without state) for
        {props.message}
      </p>
    </div>
  );
};

export default Message;
