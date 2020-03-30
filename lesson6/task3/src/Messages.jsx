import React from 'react';

const Messages = ({ text }) => {
  if (!text) {
    return null;
  }
  return (
    <div className="message">
      {text}
    </div>
  )
}

export default Messages;