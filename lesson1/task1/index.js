const rootElement = document.querySelector('#root');

const createElement = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React'
);

ReactDOM.render(createElement, rootElement);