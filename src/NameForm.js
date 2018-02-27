import React, { Component } from 'react';
import ResponseText from './ResponseText';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:{firstname: '', lastname: ''}, submitted: false}
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({name: {firstname: event.target.value, lastname: this.state.name.lastname}});
  }

  handleLastNameChange(event) {
    this.setState({name: {firstname: this.state.name.firstname, lastname: event.target.value}});
  }

  handleSubmit(event) {
    this.setState({submitted: true})
    console.log("Setting submitted to : ", this.state.submitted)
    alert('A name was submitted: ' + this.state.name.firstname + ' ' + this.state.name.lastname);
    event.preventDefault();
  }

  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input type="text" value={this.state.name.firstname} onChange={this.handleFirstNameChange} />
            </label>
            <label>
              Last Name:
              <input type="text" value={this.state.name.lastname} onChange={this.handleLastNameChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {this.state.submitted && <ResponseText/>}
        </div>
      )
  }
}

export default NameForm;
