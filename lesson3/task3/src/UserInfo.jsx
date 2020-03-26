import React from 'react'
import UserAvatar from './UserAvatar';

const UserInfo = (props) => (
  <div className="user-info">
    <UserAvatar user={props.user} />
    <div className="user-info__name">{props.user.name}</div>
  </div>
);

export default UserInfo;