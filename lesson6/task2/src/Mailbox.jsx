import React from 'react';

const Mailbox = ({ unreadMessage }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {
        unreadMessage.length > 0 && (
          <span className="mailbox__count">{unreadMessage.length}</span>
        )
      }
    </div>
  )
}

export default Mailbox;