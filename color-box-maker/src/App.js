import React from 'react';
import BoxList from './BoxList';

function App() {
  return (
    <div className="App">
      <h1>Submit desired box...</h1>
      <p>Width and height should be given like: 20px, 40em etc.</p>
      <BoxList />
    </div>
  );
}

export default App;
