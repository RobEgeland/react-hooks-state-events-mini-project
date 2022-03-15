import React, {useState} from "react";
import Task from "./Task";
import { interfaces } from "mocha";

function TaskList({tasks, categories, deleteTask}) {

  
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task) => (
          <Task 
          key={task.text} 
          text={task.text} 
          category={task.category} 
          deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
