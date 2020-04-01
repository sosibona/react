import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  state ={
    isSorting: null,
  }

  toggleSort = () => {
    this.setState({
      isSorting: this.state.isSorting === 'ASC'
        ? 'DESC'
        : 'ASC'
    })
  }

  render() {
    const userList = this.props.users.slice().sort((a,b) => {
      return this.state.isSorting === 'ASC' ? (a.age - b.age) : (b.age - a.age)
    }).map(user => {
    return (
      <User key={user.id} {...user}/>
      // <li className="user" key={user.id}>
      //   <span className="user__name">{user.name}</span>
      //   <span className="user__age">{user.age}</span>
      // </li>
      )
    })
    return (
          <>
            <button className="btn" onClick={this.toggleSort}>{this.state.isSorting || '-'}</button>
            <ul className="users">
              {userList}
            </ul>
          </>
    )
  }
}

export default UsersList;