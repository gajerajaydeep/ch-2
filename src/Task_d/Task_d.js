import React from 'react';
import { useState } from 'react';
import './Task_d.css'

export default function Task_d() {

    const [count , setCount] = useState(0);


const handleBtnIncrement = ()=> {
    setCount(count + 1);
    
}
const handleBtnDecrement =()=>{
    setCount(count - 1);

}

const handleBtnReset = ()=>{
    setCount(0);
}
  return (
    <>
    <span className='counter'>Current Value = {count}</span><br/><br/>
    <button className="task_d_btn"onClick={handleBtnIncrement}>Increment</button>
    <button  className="task_d_btn" onClick={handleBtnDecrement}>Decrement</button>
    <button  className="task_d_btn" onClick={handleBtnReset}>Reset</button>
    </>
  )
}
