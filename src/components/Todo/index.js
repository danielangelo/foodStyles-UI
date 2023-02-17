import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";
import { useLazyQuery, gql } from "@apollo/client";
import { useEffect } from "react";

const LIST_TODOS = gql`
  query ListTodos($filter: String) {
    listTodos(filter: $filter) {
      id
      title
      isCompleted
    }
  }
`;

const Todo = () => {
  const [executeListTodos, { data }] = useLazyQuery(LIST_TODOS, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    executeListTodos();
  }, [executeListTodos]);

  const handleFilterChange = (filter) => {
    executeListTodos({ variables: { filter: filter } });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoCreator onAddingTodo={executeListTodos} />
      <TodoList data={data} onDeleteTodo={executeListTodos} />
      <TodoFilters onFilterChange={handleFilterChange} />
    </div>
  );
};

export default Todo;
