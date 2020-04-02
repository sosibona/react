import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends Component {
  state = {
    currentPage: 0,
    itemsPerPage: 3
  };

  prevPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  };

  nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  };

  render() {
    const startItemsOnPage = this.state.currentPage * this.state.itemsPerPage;
    const userList = this.props.users
      .slice(startItemsOnPage, startItemsOnPage + 3)
      .map(user => {
        return <User key={user.id} {...user} />;
      });
    return (
      <div>
        <Pagination
          goPrev={this.prevPage}
          goNext={this.nextPage}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">{userList}</ul>
      </div>
    );
  }
}

export default UsersList;
