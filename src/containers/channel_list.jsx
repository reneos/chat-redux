import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  render() {
    const { channels, selectedChannel } = this.props;
    const channelsMenu = channels.map((channel) => {
      const classes = channel === selectedChannel ? "active" : "";
      return (<li className={classes} key={channel}>
        {channel}
      </li>);
    });
    return (
      <div className="channel_pane">
        <h2>Channels</h2>
        <ul>
          {channelsMenu}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, null)(ChannelList);
