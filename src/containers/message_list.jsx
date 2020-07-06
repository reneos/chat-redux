import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';

import { setMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    setInterval(this.props.setMessages, 1000, this.props.selectedChannel);
  }


  render() {
    const messages = this.props.messages.map((msg, index) => {
      return <Message key={`${msg.username}${index}`} message={msg} />
    });
    return (<ul>
      {messages}
    </ul>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
