import React from 'react'
import ReactDOM from 'react-dom'
import NumberList from './NumberList'
import './index.scss'

const numbers = [1, 2, 3, 4];

const root = document.querySelector('#root');

ReactDOM.render(
  <NumberList numbers={numbers}/>, 
  root
)