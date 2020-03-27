import React from 'react'
import { getAge } from './getAge';



const Greeting = (props) => {
  console.log()
  return (
  <h1 className="greening">My name is {props.firstName} {props.lastName}. I'm {getAge(props.birthDate)} years old</h1>
  )
}

export default Greeting;