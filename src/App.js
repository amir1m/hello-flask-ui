import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResponseText from './ResponseText';


import NameForm from './NameForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false }
  }
  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <NameForm/>
      </div>
    );
  }
}

export default App;
