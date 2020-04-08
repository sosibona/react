import React, { Component } from "react";

class OddNumbers extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 1
  }

  render() {
    const {title, number} = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

export default OddNumbers;
