import React, { Component } from 'react';
class ResponseText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg:'', first_name: '', last_name:''}
    console.log('First name: ', this.state.first_name)
  }
  render() {
    return(<p> Resonse: {this.state.first_name}</p>);
  }
}

export default ResponseText;
