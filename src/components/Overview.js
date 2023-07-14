import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash } from '@fortawesome/free-solid-svg-icons'



const Overview = (props) => {

    const { tasks } = props;
    console.log(tasks)

        return (
            <ul>
                {tasks.map((task) => {
                    return (
                    <li 
                        key={task.id}>
                            {task.number}. {task.text} 
                            <button><FontAwesomeIcon icon={faTrash} /></button>
                    </li>
                    )
                })}
            </ul>
        )
    }



export default Overview;