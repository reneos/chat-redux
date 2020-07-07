import React from 'react';
import { emojify } from 'react-emojione';

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
};

function Message(props) {
  const { author, content, created_at } = props.message;
  const usernameColor = { color: stringToColour(author) };
  return (<div className="message">
    <div className="message-meta">
      <span className="message-username" style={usernameColor}>
        {author}
      </span>
      <span className="message-date">
        {created_at}
      </span>
      <div className="message-content">
        {emojify(content)}
      </div>
    </div>
  </div>);
}

export default Message;
