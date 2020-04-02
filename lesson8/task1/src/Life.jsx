import React, { Component } from "react";

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    fetch('https://api.github.com/users/sosibona')
      .then(response => response.json())
      .then(data => console.log(data))
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('next: ', nextProps, nextState)
    console.log(`componentDidUpdate(prevProps, prevState): some updates based on new props`);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('previos: ', prevProps, prevState)
    console.log(`componentDidMount: API calls, subscriptions`);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return <div className="number">{this.props.number}</div>;
  }
}

export default Life;
