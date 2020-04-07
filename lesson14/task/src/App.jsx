import React from "react";
import User from './User'

class App extends React.Component {
  state = {
    userData: null,
  };
  componentDidMount() {
    this.fetchUser("facebook");
  }

  fetchUser(userId) {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          userData: data,
        })
      );
  }
  render() {
    return (
      <div className="page">
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <button>Facebook</button>
            </li>
            <li className="navigation__item">
              <button>Github</button>
            </li>
          </ul>
        </div>
        <User {...this.state.userData}/>
      </div>
    );
  }
}

export default App;
