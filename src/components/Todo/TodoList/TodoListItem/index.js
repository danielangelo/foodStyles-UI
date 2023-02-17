import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

import "./index.css";

const MARK_COMPLETED = gql`
  mutation MarkTodoCompleted($id: Int!) {
    markTodoCompleted(id: $id)
  }
`;

const MARK_INCOMPLETED = gql`
  mutation MarkTodoIncompleted($id: Int!) {
    markTodoIncompleted(id: $id)
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id)
  }
`;

const TodoListItem = ({ id, title, isCompleted, onDeleteTodo }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [
    executeMarkCompleted,
    { loading: markCompletedLoading, error: markCompletedError },
  ] = useMutation(MARK_COMPLETED);

  const [
    executeMarkIncompleted,
    { loading: markIncompletedLoading, error: markIncompletedError },
  ] = useMutation(MARK_INCOMPLETED);

  const [executeDeleteTodo] = useMutation(DELETE_TODO);

  if (markCompletedLoading || markIncompletedLoading) {
    return <div>loading</div>;
  }

  if (markCompletedError) {
    return <div>{markCompletedError}</div>;
  }

  if (markIncompletedError) {
    return <div>{markIncompletedError}</div>;
  }

  const onChange = (evt) => {
    if (evt.target.checked) {
      executeMarkCompleted({ variables: { id } }).then(() => {
        setIsChecked(evt.target.checked);
      });
    } else {
      executeMarkIncompleted({ variables: { id } }).then(() => {
        setIsChecked(evt.target.checked);
      });
    }
  };

  const handleDeleteTodo = () => {
    executeDeleteTodo({
      variables: { id },
    });
    onDeleteTodo();
  };

  return (
    <div className="todoListItem">
      <input className="checkbox" type="checkbox" checked={isChecked} onChange={onChange} />
      <span className="list-title">{title}</span>
      <div className="delete" onClick={handleDeleteTodo} />
    </div>
  );
};

export default TodoListItem;
