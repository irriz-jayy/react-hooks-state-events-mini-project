import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const idArray = TASKS.map((task, index) => {
    return { ...task, id: index };
  });

  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState(idArray);

  function addTask(newTask) {
    return (
      // how to set item to top of the list
      setTasks([newTask, ...tasks])
    );
  }

  function removeTask(taskId) {
    let newTasks = tasks.filter((task) => {
      if (task.id === taskId) {
        return false;
      } else {
        return true;
      }
    });
    setTasks(newTasks);
  }

  const displayedTask = tasks.filter((task) => {
    if (category === "All") {
      return true;
    } else {
      return category === task.category;
    }
  });
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter settingCategory={setCategory} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={addTask} categories={CATEGORIES} />
      <TaskList removeTask={removeTask} tasks={displayedTask} />
    </div>
  );
}

export default App;
