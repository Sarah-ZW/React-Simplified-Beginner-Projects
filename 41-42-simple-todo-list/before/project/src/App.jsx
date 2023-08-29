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
  //next thing is to set the value of completed using e.target.checked from the checkbox
  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="list-item">
              <label className="list-item-label">
                <input type="checkbox" value={todo.completed} data-list-item-checkbox />
                <span data-list-item-text>{todo.name}</span>
              </label>
              <button data-button-delete>Delete</button>
            </li>
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
