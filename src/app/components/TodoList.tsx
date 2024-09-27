import {TodoListProps} from '../types.js'
import TodoItem from './TodoItem';

function TodoList({todos, removeTodo, toggleTodo}: TodoListProps) {

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
      ))}
    </ul>
  );
}

export default TodoList;