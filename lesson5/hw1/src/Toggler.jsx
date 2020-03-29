import React, { Component } from 'react';
import './index.scss';

let switchOff = false;

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: '',
    }
  }

  setButtonContent = () => {
    this.setState({
      isSwitchOn: !this.state.isSwitchOn,
    })

    // document.querySelector('.toggler').textContent = switchOff 
    //   ? 'On' 
    //   : 'Off';
  }

  

  render() {
    return (
    <button className="toggler" onClick={() => this.setButtonContent()}>{this.state.isSwitchOn ? 'On' : 'Off'}</button>
    )
  }
}



export default Toggler;