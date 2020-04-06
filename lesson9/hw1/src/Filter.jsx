import React from "react";

class Filter extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input onChange={this.props.onChange} type="text" className="filter__input" />
      </div>
    );
  }
}

export default Filter
