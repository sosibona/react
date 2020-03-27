import React from 'react';
import Counter from './Counter'

const App = () => {
  return (
    <>
      <Counter start={0} interval={60000} />
      <Counter start={0} interval={1000}/>
      <Counter start={0} interval={10} />
    </>
  );
}

export default App;