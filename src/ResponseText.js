import React, { Component } from 'react';
import axios from 'axios'
class ResponseText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg:props.msg, firstname: props.firstname, lastname:props.lastname}
    console.log("State in ResponseText: ", this.state)
  }
  render() {
    return(<div> <p>Resonse:</p>
              <p>First Name:{this.state.firstname}</p>
              <p>Last Name:{this.state.lastname}</p>
              <p>MSG:{this.state.msg}</p>
            </div>);
  }
}

export default ResponseText;
