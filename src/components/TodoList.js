// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from "react";
import Todo from './Todo'

const TodoList = (props) =>{

    const handleClick = () =>{
        props.clearTask()

    }



    return(
        <div className="shopping-list">
            {props.task.map((item) =>(
                <Todo key={item.id} item={item}  toggleTask = {props.toggleTask} />

            ))}

            <button  onClick={handleClick}>Clear Task</button>


        </div>





    )






}

export default TodoList