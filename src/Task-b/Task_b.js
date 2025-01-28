import React from 'react';
import './Task_b.css';


export const Task_b = (props) => {
  return (

    <>
      <div className="userProfile">
        <ul>
<p>Task-b</p>


          <li className='userName'>User Name : {props.name}</li>
          <li><img src={props.imgsrc} alt="img" srcset="" /></li>
          <li className='userBio'>Bio : {props.bio}</li>
        </ul>
      </div>

      
    </>
  )
}
export default Task_b;


