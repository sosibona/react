import React from 'react'
import { getAge } from './getAge';



const Greeting = (props) => {
  return (
  <h1>My name is {props.user.firstName} {props.user.lastName}. I'm {getAge(props.user.birthDate)} years old</h1>
  )
}

export default Greeting;