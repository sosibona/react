import React, { Component } from 'react';
import './index.scss';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }

  setTitle = (color) => {
    this.setState({
      color: color,
    })
  }

  reseTitle = () => {
    this.setState({
      color: '',
    })
  }

  
  render() {
    return (
      <div>
        <div className="picker__title">
        {this.state.color}
        </div>
        <div>
          <button 
            className="picker__button picker__button_coral" 
            onMouseEnter={this.setTitle.bind(this, 'Coral')}
            onMouseLeave={this.reseTitle}    
          ></button>
          <button 
            className="picker__button picker__button_aqua" 
            onMouseEnter={this.setTitle.bind(this, 'Aqua')}
            onMouseLeave={this.reseTitle}  
          ></button>
          <button 
            className="picker__button picker__button_bisque" 
            onMouseEnter={this.setTitle.bind(this, 'Bisque')}
            onMouseLeave={this.reseTitle}
          ></button>
        </div>
      </div>
    )
  }
}



export default ColorPicker;