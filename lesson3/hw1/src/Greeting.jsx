import React from 'react'
import { getAge } from './getAge';



const Greeting = (props) => {
  console.log(props)
  return (
  <h1>My name is {props.firstName} {props.lastName}. I'm {getAge(props.birthDate)} years old</h1>
  )
}

export default Greeting;