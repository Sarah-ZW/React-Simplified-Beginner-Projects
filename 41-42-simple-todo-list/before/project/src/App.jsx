import { TodoItem } from "./TodoItem"
import "./styles.css"
import { useState } from "react"

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo() {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), name: newItem, completed: false },
      ]
    })
    if (newItem === "") {
      return
    } else {
      setNewItem("")
    }
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => id !== todo.id)
    })
  }

  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              handleDelete={handleDelete}
              toggleTodo={toggleTodo}
            />
          )
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default App
