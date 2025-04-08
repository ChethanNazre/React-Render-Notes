import './App.css';
import React from 'react';
import { UseState } from './Components/UseState';
import { UseReducer } from './Components/UseReducer/usereducer';
import { ObjectUseState } from './Components/ImmutableState/objectUseState';
import { ArrayUseState } from './Components/ImmutableState/ArrayUseState';
function App() {
  return (
    <div className="App">
      <ObjectUseState/>

      <ArrayUseState/>

      {/* <UseReducer />

      <UseState /> */}
     
    </div>
  );
}

export default App;
