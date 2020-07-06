import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    const newValue = event.currentTarget.value;
    this.setState({
      value: newValue
    });
  }

  render() {
    return (<form className="message_form">
      <input onChange={this.handleChange} value={this.state.value} />
      <button>Submit</button>
    </form>);
  }
}

export default MessageForm;
