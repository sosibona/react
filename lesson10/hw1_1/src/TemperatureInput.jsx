import React, { Component } from "react";

class TemperatureInput extends Component {
  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {this.props.scale}:</legend>
        <input
          name="celsius"
          onChange={this.props.onTemperatureChange}
          value={this.props.temperature}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
