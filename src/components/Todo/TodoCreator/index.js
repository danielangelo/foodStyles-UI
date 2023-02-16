import { useState } from "react";

const TodoCreator = () => {
  const [value, setValue] = useState("");

  const handleKeyUp = (evt) => {
    if (evt.key === "Enter") {
      createTodo();
    }
  };

  const createTodo = () => {};

  return (
    <input
      type="text"
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      onKeyUp={handleKeyUp}
    />
  );
};

export default TodoCreator;
