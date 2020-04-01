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
    let userList;
    if (this.state.isSorting) {
      userList = this.props.users.slice().sort((a,b) => {
        return this.state.isSorting === 'ASC' ? (a.age - b.age) : (b.age - a.age)
      });
    } else {
      userList = this.props.users;
    }
     
    return (
          <>
            <button className="btn" onClick={this.toggleSort}>{this.state.isSorting || '-'}</button>
            <ul className="users">
              {userList.map(user => {
                return (
                  <User key={user.id} {...user}/>
                )
              })}
            </ul>
          </>
    )
  }
}

export default UsersList;