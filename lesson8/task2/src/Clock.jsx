import React, { Component } from "react";
import moment from "moment";

const getTime = timezone => {
  const currentTimeZone = new Date().getTimezoneOffset() / 60;
  const locationTimeZone = new Date(
    new Date().setHours(new Date().getHours() + currentTimeZone + 1 + timezone)
  );
  return locationTimeZone;
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: getTime(props.offset).toLocaleTimeString("en-US")
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        offset: getTime(this.props.offset).toLocaleTimeString("en-US")
      });
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.offset}</div>
      </div>
    );
  }
}

export default Clock;
