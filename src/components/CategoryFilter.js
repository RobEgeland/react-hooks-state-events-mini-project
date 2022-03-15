import React, {useState} from "react";

function CategoryFilter({categories, filterTask, selectedCategory}) {
  const [className, setClassName] = useState(false)



  return (
    <div className="categories">
      <h5>Category filters</h5>
      
      {categories.map((category) => (
        <button 
        className={category === selectedCategory ? "selected" : null  }
        onClick={() => {
          filterTask(category)
        }}
        key={category}
        >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
