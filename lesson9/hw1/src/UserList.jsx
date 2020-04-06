import React from "react";
import User from "./User";
import Filter from "./Filter";

class UserList extends React.Component {
  state = {
    filterText: "",
    count: this.props.users.length,
  };

  onChange = (event) => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    const usersList = this.props.users
      .filter((user) => user.name.includes(this.state.filterText))
      .map((user) => {
        return <User key={user.id} {...user} />;
      });
    return (
      <div>
        <Filter filterText={this.state.filterText} count={usersList.length} onChange={this.onChange} />
        <ul className="users">{usersList}</ul>
      </div>
    );
  }
}

export default UserList;
