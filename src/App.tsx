import React from 'react'
import Hello from './components/Hello'

const App = () => {  
  return (
    <div>
      <h1>Hello Typescript with React!</h1>
      <Hello
        name={"Sakir"}
        job={"Developer"}     
      />
    </div>
  );
}

export default App

