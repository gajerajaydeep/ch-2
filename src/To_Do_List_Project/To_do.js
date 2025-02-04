import React, { useState } from 'react';
import './To_do.css'

export default function To_do() {

    //todoState
    const [todoList, setTodoList] = useState([]);

    //handleFormSubmit
    const handleFormSubmit = (event) => {

        let toName = event.target.todoName.value;
        if (!todoList.includes(toName)) {
            let finalDolist = [...todoList, toName];
            setTodoList(finalDolist);

        } else {
            alert("This To-Do is already Exist..")
        }
        event.preventDefault();
    }

    let list = todoList.map((value, index) => {
        return (
            <ToDoListItem value={value} key={index} indexNumber={index}
                todoList={todoList}
                setTodoList={setTodoList}
            />
        );
    });
    return (

        <>
            <h1 className='to-do-h1'>To-Do List</h1>
           
            <div className="form">  
                <form className='to-do-form' onSubmit={handleFormSubmit}>

                    <input type="text" className='to-do-input' name='todoName'   placeholder="Enter Task"/>
                    <button className='to-do-add-btn'>Add </button>

                </form>
            </div>
            <div className="task-List">
            <h5>Total Task :{todoList.length}</h5>
                <ul>

                    {list}
                </ul>
            </div>

        </>
    )
}

function ToDoListItem({ value, index, indexNumber, todoList, setTodoList }) {

    let deleteRow = () => {
        // console.log(indexNumber);
        let finalData = todoList.filter((v, i) => (i != indexNumber)
        )
        setTodoList(finalData)
    }

    //complete todo ------conditional rendaring ------
    const [status,setStatus] = useState(false);
    const handleCompleteTodo = () =>{
setStatus(!status);
    }

    return (
        <>

            <li style={{ padding: "2px 8px" }} onClick={handleCompleteTodo} className={(status) ?'completetodo' : ''}>{"Task :" + indexNumber  } {value} 
                <span onClick={deleteRow}>&times;</span>
                <input type="checkbox" name='checkBox' />
            </li>
        </>

    )
}
