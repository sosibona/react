import React, { Component } from "react";
import User from "./User";

class App extends Component {
  state = {
    userId: "facebook",
    userData: null,
  };

  componentDidMount() {
    const { userId } = this.state;
    this.fetchUser(userId);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("==> update");
    const { userId } = this.state;
    if (prevState.userId !== userId) {
      this.fetchUser(userId);
    }
  }

  setUser = (userId) => {
    this.setState({
      userId,
    });
  };

  fetchUser(userId) {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          userData: data,
        });
      });
  }
  
  render() {
    console.log("==> render");
    const { userData } = this.state;
    return (
      <div className="page">
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <button type="button" onClick={() => this.setUser("facebook")}>
                Facebook
              </button>
            </li>
            <li className="navigation__item">
              <button type="button" onClick={() => this.setUser("github")}>
                Github
              </button>
            </li>
          </ul>
        </div>
        {userData && <User {...userData} />}
      </div>
    );
  }
}
export default App;
