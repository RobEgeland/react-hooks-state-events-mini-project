import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTaskData] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function deleteTask(text) {

    const newArr = tasks.filter((task) => task.text !== text)
    setTaskData(newArr)
  }

  
  function onTaskFormSubmit(newTask) {
    console.log("in App", newTask)
    const newTaskArr = [...tasks, newTask]
    setTaskData(newTaskArr)
    
  }

  function filterTask(category) {
    setSelectedCategory(category)
    const filterArr = TASKS.filter((task) => {
      if(category === "All"){
        return task
      }else{
        return task.category === category
      }
    })
    setTaskData(filterArr)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} categories={CATEGORIES} filterTask={filterTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} categories={CATEGORIES} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
