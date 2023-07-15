import React from "react";

const TaskPara = (props) => {

    //id, no, text

    const { number, text, edit } = props;

    return (
        <p>{number}. {text}</p>
    )
}

export default TaskPara;