import React from 'react';

const NumbersList = ({ numbers }) => {
  const numberList = numbers.map(num => {
  return <li key={num}>{num}</li>
  })
  return (
    <ul>
      {numberList}
    </ul>
  )
}

export default NumbersList;