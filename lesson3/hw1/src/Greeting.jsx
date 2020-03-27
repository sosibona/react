import React from 'react'
import { getAge } from './getAge';



const Greeting = (props) => {
  return (
  <div>My name is {props.user.firstName} {props.user.lastName}. I'm {getAge(props.user.birthDate)} years old</div>
  )
}

export default Greeting;