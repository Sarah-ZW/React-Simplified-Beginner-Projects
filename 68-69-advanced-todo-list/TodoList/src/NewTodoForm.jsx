import { useRef, useContext } from "react"
import { TodoContext } from "./App"

export function NewTodoForm() {
  const { addNewTodo } = useContext(TodoContext)

  const nameRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    if (nameRef.current.value === "") return
    addNewTodo(nameRef.current.value)
    nameRef.current.value = ""
  }

  return (
    <form onSubmit={handleSubmit} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input autoFocus type="text" id="todo-input" ref={nameRef} />
      <button>Add Todo</button>
    </form>
  )
}
