import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((tasks, index) => (
        <Task key={index} text={tasks.text} category={tasks.category} />
      ))}
    </div>
  );
}

export default TaskList;