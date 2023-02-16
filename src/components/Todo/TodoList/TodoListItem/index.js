const TodoListItem = ({ title, isCompleted, onChange }) => (
  <div>
    <input type="checkbox" checked={isCompleted} onChange={onChange} />
    <span>{title}</span>
  </div>
);

export default TodoListItem;
