import React from 'react';

const NumberList = ({ numbers }) => {
  const numberList = numbers.map(num => {
  return <li key={num}>{num}</li>
  })
  return (
    <ul>
      {numberList}
    </ul>
  )
}

export default NumberList;