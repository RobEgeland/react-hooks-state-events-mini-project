import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [detail, setDetail] = useState("")
  const [category, setCategory] = useState("Code")

  function changeDetail(e) {
    setDetail(e.target.value)
  }

  function changeCat(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      text: detail,
      category: category
    }
    onTaskFormSubmit(newTask)
    setCategory("Code")
    setDetail("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={detail} onChange={changeDetail} />
      </label>
      <label>
        Category
        <select onChange={changeCat} name="category">
          {categories.map((category) => {
            if(category !== "All") {
              return <option key={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
