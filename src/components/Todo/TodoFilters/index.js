import { useState } from "react";

import "./index.css";

const TodoFilters = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div>
      <span>Show:</span>
      <button
        className={`${filter === "all" ? "selected" : ""}`}
        onClick={() => handleFilterChange("all")}
      >
        All
      </button>
      <button
        className={`${filter === "completed" ? "selected" : ""}`}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className={`${filter === "incompleted" ? "selected" : ""}`}
        onClick={() => handleFilterChange("incompleted")}
      >
        Incompleted
      </button>
    </div>
  );
};

export default TodoFilters;
