import React from 'react'
import { getAge } from './getAge';



const Greeting = (props) => {
  return (
  <div className="greening">My name is {props.firstName} {props.lastName}. I'm {getAge(props.birthDate)} years old</div>
  )
}

export default Greeting;