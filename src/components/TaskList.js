import React from "react";
import Task from "./Task";

function TaskList({ dataA, handleDelete }) {
  const listingTasks = dataA.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div className="tasks">
      <table>
        <tbody>{listingTasks}</tbody>
      </table>
    </div>
  );
}

export default TaskList;
