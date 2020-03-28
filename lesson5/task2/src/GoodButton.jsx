import React, { Component } from 'react';
import './index.scss';

class GoodButton extends Component {
  handleClick() {
    alert('Good job!');
  }
  render () {
    return (
      <button className="fancy-button"
      onClick={this.handleClick}
    >
      Click me!
    </button>
    )
  }
}

export default GoodButton;