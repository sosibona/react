import React, { Component } from "react";
import Expand from "./Expand";

class App extends Component {
  state = {
    isOpen: false,
  };

  toggleContent = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const content = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class.
      </p>
    );
    return (
      <div className="app">
        <Expand title="Some title" toggleContent={this.toggleContent} isOpen={this.state.isOpen}>
          {content}
        </Expand>
      </div>
    );
  }
}
export default App;
