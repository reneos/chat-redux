import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';

import { setMessages } from '../actions';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.messageContainer = React.createRef();
  }

  componentWillMount() {
    setInterval(this.props.setMessages, 3000, this.props.selectedChannel);
  }

  componentDidUpdate() {
    this.messageContainer.current.scrollTop = this.messageContainer.current.scrollHeight;
  }

  render() {
    const messages = this.props.messages.map((msg, index) => {
      return <Message key={`${msg.username}${index}`} message={msg} />
    });
    return (<ul ref={this.messageContainer} className="message_list">
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
