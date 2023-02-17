import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
const CREATE_TODO = gql`
  mutation CreateTodo($title: String!) {
    createTodo(title: $title) {
      id
      title
    }
  }
`;

const TodoCreator = ({ onAddingTodo }) => {
  const [value, setValue] = useState("");

  const [executeCreateTodo, { loading, error }] = useMutation(CREATE_TODO);
  const handleKeyUp = (evt) => {
    if (evt.key === "Enter") {
      executeCreateTodo({ variables: { title: value } }).then(() => {
        setValue("");
        onAddingTodo();
      });
    }
  };

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
