import React, { Component } from 'react';
import './index.scss';

let switchOff = false;

class Toggler extends Component {

  setButtonContent = () => {
    switchOff = !switchOff;

    document.querySelector('.toggler').textContent = switchOff 
      ? 'On' 
      : 'Off';
  }

  render() {
    return (
      <button className="toggler" onClick={() => this.setButtonContent()}>Off</button>
    )
  }
}



export default Toggler;