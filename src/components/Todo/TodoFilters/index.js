import { useState } from "react";

import "./index.css";

const TodoFilters = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div className="filters">
      <span className="show">Show:</span>
      <button
        className={`${filter === "all" ? "button selected" : "button"}`}
        onClick={() => handleFilterChange("all")}
      >
        All
      </button>
      <button
        className={`${filter === "completed" ? "button selected" : "button"}`}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className={`${filter === "incompleted" ? "button selected" : "button"}`}
        onClick={() => handleFilterChange("incompleted")}
      >
        Incompleted
      </button>
    </div>
  );
};

export default TodoFilters;
