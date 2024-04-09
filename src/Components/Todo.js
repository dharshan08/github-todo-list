import React, { useRef, useState } from "react";

const Todo =()=>{
    const [tasks,setTasks]= useState([]);
    const taskInputRef=useRef(null);
    const addTask=(event)=>{
        event.preventDefault();
        const taskText=taskInputRef.current.value.trim();
        if(taskText!==""){
            setTasks((prevTasks)=>[...prevTasks,taskText]);
            taskInputRef.current.value="";
        }
        console.log("Tasks are",tasks);
    };
    const toggleTask=(index)=>{
        setTasks((prevTasks)=>{
            const updatedTasks=[...prevTasks];
            updatedTasks.splice(index,1);
            return updatedTasks;
        })
    };

    return(
        <div className="container">
            <h1>To do List</h1>
            <div className="input-container">
                <input type="text" placeholder="Enter text" className="task-input" ref={taskInputRef}/>
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>
            <ul className="task-list" id='task list'>
                {tasks.map((task,index)=>(
                    <li key={index}>
                        <input
                            type='checkbox'
                            className="task-checkbox"
                            onChange={()=>toggleTask(index)}
                            />
                            <span className="task-text">{task}</span>
                    </li>
                ))}

            </ul>
        </div>
    )
}
export default Todo;