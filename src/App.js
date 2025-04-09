import './App.css';
import React from 'react';
import { UseState } from './Components/UseState';
import { UseReducer } from './Components/UseReducer/usereducer';
import { ObjectUseState } from './Components/ImmutableState/objectUseState';
import { ArrayUseState } from './Components/ImmutableState/ArrayUseState';
import { Parent } from './Components/parentChild/ParentComp';
import { Parent1 } from './Components/optimization/Parent1';
import { Child1 } from './Components/optimization/Child1';


function App() {
  return (
    <div className="App">

    <Parent1><Child1/></Parent1>

      {/* <ObjectUseState/>

      <ArrayUseState/> */}

      {/* <UseReducer />

      <UseState /> */}
     
    </div>
  );
}

export default App;
