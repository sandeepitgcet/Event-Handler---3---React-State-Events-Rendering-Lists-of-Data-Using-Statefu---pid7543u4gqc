import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [inputValue,setInputValue] = useState('');
  const [numInput, setNumInput] = useState('');
  const handleInput = (event) =>{
   // use console.log
   console.log(event.target.value);
   setInputValue(event.target.value);
   
  }

  const handleNumInput = (event) => {
    console.log(event.target.value);
    setNumInput(event.target.value);
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput} value={inputValue}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange={handleNumInput} value={numInput}/>
      <br/>
    </div>
  )
}


export default App;
