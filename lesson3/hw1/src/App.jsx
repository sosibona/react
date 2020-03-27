import React from 'react';
import Greeting from './Greeting'

// const user = {
//   firstName: 'Taras',
//   lastName: 'Test',
//   birthDate: new Date('1987-03-05')
// }

const App = () => (
  <Greeting
  firstName="Taras"
  lastName="Test"
  birthDate={new Date('2001-01-01T11:11:11.819Z')}
  />
)

export default App;