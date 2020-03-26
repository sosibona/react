import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Taras',
  avatarUrl: 'https://avatars2.githubusercontent.com/u/48248564?s=400&u=ead781175af280bc4637070cff6cb9aaa097aaaf&v=4'
}

const App = () => (
  <Comment 
    user={userInfo}
    text="Good job!"
    data={new Date()}
  />
)

export default App;