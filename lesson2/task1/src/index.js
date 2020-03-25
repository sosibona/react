import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const createElement = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDOM.render(createElement, rootElement);