import React from 'react';
import { Greeting } from './Greeting'

const user = {
  firstName: 'Taras',
  lastName: 'Test',
  birthDate: new Date('1987-03-05')
}

export const App = () => (
  <Greeting
  user={user}
  />
)

// export default App;