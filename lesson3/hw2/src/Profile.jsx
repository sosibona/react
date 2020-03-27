import React from 'react';
import getBirthDate from './getBirthDate';

const Profile = (props) => {
  return (
    <>
      <h1 className="profile__name">{props.user.firstName} {props.user.lastName}</h1>
      <div className="profile__birth">Was born {getBirthDate(props.user.birthDate)} in {props.user.birthPlace}</div>
    </>
  );
}

export default Profile;