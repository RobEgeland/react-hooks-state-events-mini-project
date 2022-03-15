import React from "react";

function Task({text, category, deleteTask}) {
  
  return (
    <li  className="task" >
      <div className="label">{category}</div>
      <div  className="text">{text}</div>
      <button  onClick={() => deleteTask(text)}  className="delete">X</button>
    </li>
  );
}

export default Task;
