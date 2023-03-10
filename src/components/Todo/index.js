import { useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";

import "./index.css";

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
    <div className="container">
      <div className="logo" />
      <h1 className="title">Todo List</h1>
      <TodoCreator onAddingTodo={executeListTodos} />
      <TodoList data={data} onDeleteTodo={executeListTodos} />
      <TodoFilters onFilterChange={handleFilterChange} />
    </div>
  );
};

export default Todo;
