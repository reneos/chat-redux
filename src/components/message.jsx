import React from 'react';
import { emojify } from 'react-emojione';

function Message(props) {
  const { author, content, created_at } = props.message;
  return (<div className="message">
    <div className="message-meta">
      <span className="message-username">
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
