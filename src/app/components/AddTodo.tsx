import { useState } from "react";
import { AddTodoProps } from "../types";


function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!text.trim())
      return;
    addTodo(text)
    setText('')
  }

  return (
  <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    placeholder="Add Todo" 
    value={text}
    onChange={(e) => setText(e.target.value)}
    />" 
    <button>Add Todo</button>
  </form>

  )
}

export default AddTodo;