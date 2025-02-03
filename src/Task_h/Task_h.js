import React from 'react';
import './Task_h.css'

export default function Task_h() {
  return (
    <>
      <p>Design a Button component with different styles (e.g., primary, secondary, danger) and use it in another component.</p>
      <button className='task-h-btn-1'>Primary Button</button>
      <button className='task-h-btn-2'>Secondary Button</button>

<ul>
  <li style={{backgroundColor: 'green', color:'white' , fontSize:"20px" }}>Home</li>
  <li style={{margin:"20px"}}>About</li>
</ul>
    </>
  )
}
