import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    isOnline: true
  };

  componentDidMount() {
    window.addEventListener("online", this.onOnline);
    window.addEventListener("offline", this.onOffline);
  }

  onOnline = () => {
    this.setState({
      isOnline: true
    });
  };

  onOffline = () => {
    this.setState({
      isOnline: false,
    });
  };


  render() {
    if (this.state.isOnline) return <div className="status">Online</div>;
    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;
