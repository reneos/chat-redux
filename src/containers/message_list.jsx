import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map((msg, index) => {
      return <Message key={`${msg.username}${index}`} message={msg} />
    });
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
