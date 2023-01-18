import React, { useState } from "react";

function NewTaskForm({ data, setAppData }) {
  const [textData, setTextData] = useState("");
  const [categoryData, setCategoryData] = useState("");

  const filteredCategories = data
    .filter((category) => category !== "All")
    .map((category) => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
  function handleSubmit(e) {
    e.preventDefault();
    setAppData({
      text: textData,
      category: categoryData,
    });
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => setTextData(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(e) => setCategoryData(e.target.value)}
        >
          {filteredCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
