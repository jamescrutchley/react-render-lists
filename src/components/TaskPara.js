import React from "react";

const TaskPara = (props) => {

    //id, no, text

    const { number, text} = props;
    console.log(text);

    return (
        <p>{number}. {text}</p>
    )
}

export default TaskPara;