import React from 'react'
import ReactDOM from 'react-dom'
import NumbersList from './NumbersList'
import './index.scss'

const numbers = [1, 2, 3, 4];

const root = document.querySelector('#root');

ReactDOM.render(
  <NumbersList numbers={numbers}/>, 
  root
)