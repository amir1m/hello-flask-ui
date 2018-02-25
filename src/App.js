import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NameForm from './NameForm';

class App extends Component {
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
