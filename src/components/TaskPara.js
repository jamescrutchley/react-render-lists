import React from "react";

const TaskPara = (props) => {
  const { number, text } = props;

  return (
    <p>
      {number}. {text}
    </p>
  );
};

export default TaskPara;
