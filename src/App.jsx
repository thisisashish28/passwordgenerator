import { useCallback, useState, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "1234567890";
    if(charAllowed) str+= "!@#$%^&*(){}";

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator]);


  return (
    <>
    <div>
      <h1>Password Genrator</h1>
      <div>
      <input
      type="text"
      value={password}
      placeholder='password'
      readOnly
      />
      <button>copy</button>
      </div>
    <div>
      <div>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        onChange={(e)=>setLength(e.target.value)}
        />
        <label>Length {length}</label>
      </div>
      <div>
        <input
        type="checkbox"
        defaultValue={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => (!prev));
        }}
        />
        <label htmlFor="numberInput">Number</label>
      </div>
      <div>
        <input
        type="checkbox"
        defaultValue={charAllowed}
        id="characterInput"
        onChange={() => {
          setCharAllowed((prev) => (!prev));
        }}
        />
        <label htmlFor="characterInput">Character</label>
      </div>
    </div>
      </div>
      </>
  )
}

export default App
