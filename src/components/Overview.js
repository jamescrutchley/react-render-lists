import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import TaskPara from "./TaskPara";
import Editable from "./Editable";



const Overview = (props) => {

    const { tasks, deletionMethod, editMethod, submitEdit } = props;
    console.log(tasks)

        return (
            <ul>
                {tasks.map((task) => {
                    let editMode = task.edit;
                    return (
                    <li key={task.id}>
                        {editMode ? (
                            <Editable id={task.id} submitEdit={submitEdit} number={task.number} initialText={task.text}/>
                        ) : <TaskPara number={task.number} text={task.text}/>
                        }  
                            <button onClick={(e) => deletionMethod(task.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>


                            {editMode ? (
                               null
                            ) :
                                <button onClick={(e) => editMethod(task.id)}>
                                {/* onclick - setState 'edit = true' for that item in tasks*/}
                                <FontAwesomeIcon icon={faPen} />
                                </button>
                            }
                    </li>
                    )
                })}
            </ul>
        )
    }



export default Overview;