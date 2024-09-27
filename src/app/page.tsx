'use client'

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";
import { Todo } from "./types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState('all')
  const addTodo = (text: string) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  return (
    <div>
      <h1>TodoList</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={getFilteredTodos()} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      <TodoFilter setFilter={setFilter} />
    </div>
  );
}
