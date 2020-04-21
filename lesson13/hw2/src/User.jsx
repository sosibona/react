import React, { Component } from "react";

const url = `https://api.github.com/users`;

class User extends Component {
  state = {
    user: null,
    // userId: this.props.match.params.userId,
  };
  componentDidMount() {
    this.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.fetchUser(this.props.match.params.userId);
    }
  }

  fetchUser = (userId) => {
    fetch(`${url}/${userId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: data,
        })
      );
  };

  render() {
    console.log("this");
    console.log(this.state.user);
    if (!this.state.user) return null;
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={this.state.user.avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{this.state.user.name}</span>
          <span className="user__location">{this.state.user.location}</span>
        </div>
      </div>
    );
  }
}
// const User = (props) => {
//   console.log(props)
//   return (

//   );
// };

export default User;
