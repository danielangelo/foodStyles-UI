import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";

const Todo = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoCreator />
      <TodoList />
      <TodoFilters />
    </div>
  );
};

export default Todo;
