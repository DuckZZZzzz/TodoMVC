export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface AddTodoProps {
  addTodo: (text: string) => void
}

export interface TodoListProps {
  todos: Array<Todo>;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export interface TodoItemProps {
  todo: Todo
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}