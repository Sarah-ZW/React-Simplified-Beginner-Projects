import './styles.css'
import { useState } from 'react'

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodo] = useState([])
  
  const addTodo = (currentTodos) => {
      return setTodo(...currentTodos, {id: crypto.randomUUID, name: newItem, completed: false})
  }
//next thing is to map out the todos
  return (
    <>
    
    <ul id="list">
      <li className="list-item">
        <label className="list-item-label">
          <input type="checkbox" data-list-item-checkbox />
          <span data-list-item-text >Item 1</span>
        </label>
        <button data-button-delete>Delete</button>
      </li>
    </ul>

    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" value={newItem} onChange={(e) => setNewItem(e.value.target) } />
      <button onClick={addTodo}>Add Todo</button>
      </div>

    </>
  )
}

export default App
