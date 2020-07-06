import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';

import { setMessages } from '../actions';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.messageContainer = React.createRef();
    this.state = {
      interval: null
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(this.props.setMessages, 1000, this.props.selectedChannel)
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length < this.props.messages || prevProps.selectedChannel !== this.props.selectedChannel) {
      clearInterval(this.state.interval);
      this.setState({
        interval: setInterval(this.props.setMessages, 1000, this.props.selectedChannel)
      });
      this.messageContainer.current.scrollTop = this.messageContainer.current.scrollHeight;
    }
  }

  render() {
    const messages = this.props.messages.map((msg) => {
      return <Message key={`${msg.username}-${msg.created_at}`} message={msg} />;
    });
    return (
      <div className="message_list_container" ref={this.messageContainer}>
        <h2>#{this.props.selectedChannel}</h2>
        <div className="message_list">
          {messages}
        </div>
      </div>
    );
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
