import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions';

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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.username, this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (<form className="message_form" onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} value={this.state.value} />
      <button>Submit</button>
    </form>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return { username: state.username, selectedChannel: state.selectedChannel };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
