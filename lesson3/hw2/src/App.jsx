import React from 'react'
import Profile from './Profile'

const userData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London'
}

const App = () => (
  <Profile
  userData={userData}
  />
)

export default App;