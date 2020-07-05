import React from 'react';

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
        {content}
      </div>
    </div>
  </div>);
}

export default Message;
