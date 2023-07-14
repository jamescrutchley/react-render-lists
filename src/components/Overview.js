import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash } from '@fortawesome/free-solid-svg-icons'
import TaskPara from "./TaskPara";



const Overview = (props) => {

    const { tasks, deletionMethod } = props;

        return (
            <ul>
                {tasks.map((task) => {
                    return (
                    <li 
                        key={task.id}>
                            <TaskPara number={task.number} text={task.text}/>
                            <button onClick={(e) => deletionMethod(task.id)}><FontAwesomeIcon icon={faTrash} /></button>
                    </li>
                    )
                })}
            </ul>
        )
    }



export default Overview;