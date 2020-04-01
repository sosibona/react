import React, { Component } from "react";

class UserList extends Component {
  render() {
    const usersList = this.props.users.map(user => {
      return (
        <li key={user.id} className="user">
          <span className="user__name">{user.name}</span>
          <span className="user__age">{user.age}</span>
        </li>
      );
    });
    return (
      <>
        <div className="pagination">
          <button className="btn">←</button>
          <span className="pagination__page">1</span>
          <button className="btn">→</button>
        </div>
        <ul className="users">{usersList}</ul>
      </>
    );
  }
}

export default UserList;
