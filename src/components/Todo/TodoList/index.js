import TodoListItem from "./TodoListItem";

import "./index.css";

const TodoList = ({ data, onDeleteTodo }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="todo-list">
      {data.listTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
