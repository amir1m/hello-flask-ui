import React, { Component } from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: {firstname: '', lastname: ''}};

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
    alert('A name was submitted: ' + this.state.name.firstname + ' ' + this.state.name.lastname);
    event.preventDefault();
  }

  render() {
    return (
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
    );
  }
}

export default NameForm;
