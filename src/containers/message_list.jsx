import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map(msg => <li key={msg.content}>{msg.content}</li>);
    return (<ul>
      {messages}
    </ul>);
  }
}


function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, null)(MessageList);
