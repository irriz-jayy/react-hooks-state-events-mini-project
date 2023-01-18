import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [data, setData] = useState(TASKS);
  const [dataCategory, setDataCategory] = useState("All");

  function handleDelete(text) {
    const filteredList = data.filter((obj) => obj.text !== text);
    setData(filteredList);
  }
  function handleClick(category) {
    setDataCategory(category);
    if (dataCategory === CATEGORIES[0]) {
      return true;
    } else {
      const filteredCategories = data.filter(
        (obj) => obj.category === dataCategory
      );
      setData(filteredCategories);
    }
  }
  const handleFormSubmit = (newTask) => {
    setData([...data, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        filterCategory={dataCategory}
        handleClick={handleClick}
        data={CATEGORIES}
      />
      <NewTaskForm data={CATEGORIES} setAppData={handleFormSubmit} />
      <TaskList dataA={data} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
