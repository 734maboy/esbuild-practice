import React, { useState } from 'react';
import './index.css';
// @ts-ignore
import logo from './some-child.png';


const App = () => {
  const [state, setState] = useState<number>(111);

  const onBtnClick = () => {
    throw new Error();
  };
  return (
    <div>
      <h1>value = ${state} NO</h1>
      <img src={logo} />
      <button onClick={onBtnClick}>Gain me UP</button>
    </div>
  )
}

export default App
