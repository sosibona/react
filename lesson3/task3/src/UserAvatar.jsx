import React from 'react'

const UserAvatar = props => (
  <img
    className="avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
);

export default UserAvatar;