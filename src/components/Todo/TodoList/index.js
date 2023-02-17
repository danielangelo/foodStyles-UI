import TodoListItem from "./TodoListItem";

const TodoList = ({ data, onDeleteTodo }) => {
  if (!data) {
    return null;
  }

  return (
    <div>
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
