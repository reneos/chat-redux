import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setChannel } from '../actions';

class ChannelList extends Component {

  handleClick = (event) => {
    const channelName = event.currentTarget.innerText;
    this.props.setChannel(channelName);
  }

  render() {
    const { channels, selectedChannel } = this.props;
    const channelsMenu = channels.map((channel) => {
      const classes = channel === selectedChannel ? "active" : "";
      return (<li className={classes} key={channel} onClick={this.handleClick} >
        {channel}
      </li>);
    });
    return (
      <div className="channel_pane">
        <h2>Channels</h2>
        <ul className="channel_list">
          {channelsMenu}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
