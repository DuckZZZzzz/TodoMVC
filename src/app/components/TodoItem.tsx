import { TodoItemProps } from "../types";

function TodoItem({ todo, removeTodo, toggleTodo }: TodoItemProps) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>切换</button>
      <button onClick={() => removeTodo(todo.id)}>删除</button>
    </li>
  );
}

export default TodoItem;
