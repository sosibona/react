import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import User from "./User";

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="page__content">
          <h1>Users</h1>
          <BrowserRouter>
            <ul className="navigation">
              <li className="navigation__item">
                <Link to="/users/github">Github</Link>
              </li>
              <li className="navigation__item">
                <Link to="/users/facebook">Facebook</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/users">
                <span>Select a user please</span>
              </Route>
              <Route path="/users/:userId" component={User} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
