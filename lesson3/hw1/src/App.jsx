import React from 'react';
import Greeting from './Greeting'

// const user = {
//   firstName: 'Taras',
//   lastName: 'Test',
//   birthDate: new Date('1987-03-05')
// }

const App = () => (
  <Greeting
  firstName="John"
  lastName="Doe"
  birthDate={new Date('1989')}
  />
)

export default App;