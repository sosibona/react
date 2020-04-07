import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from './BoilingVerdict'

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange = (event) => {
    this.setState({
      scale: 'c',
      temperature: event.target.value,
    });
  };

  handleFahrenheitChange = (event) => {
    this.setState({
      scale: 'f',
      temperature: event.target.value,
    });
  };

  render() {
    const celsius = scaleNames[this.props.scale] === 'f' ? tryConvert(temperature, toCelsius) : this.state.temperature;
    const fahrenheit = scaleNames[this.props.scale] === 'c' ? tryConvert(temperature, toFahrenheit) : this.state.temperature;
    return (
      <div>
        <TemperatureInput
          scale="Celsius"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="Fahrenheit"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)}/>
      </div>
    );
  }
}

export default Calculator;
