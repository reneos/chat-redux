import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  render() {
    return (
      <div className="channel_pane">
        <ul>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selctedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, null)(ChannelList);
