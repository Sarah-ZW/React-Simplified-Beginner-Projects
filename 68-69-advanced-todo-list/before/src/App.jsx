import { useEffect, useReducer, useState } from "react"
import "./styles.css"
import { TodoItem } from "./TodoItem"

const ACTIONS = {
  Add: "ADD",
  Update: "UPDATE",
  Toggle: "TOGGLE",
  Delete: "DELETE",
}

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ]
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, completed: payload.completed }
        }

        return todo
      })
    default:
      throw new error(`Cannot find action for type ${type}.`)
  }
  return state
}

function App() {
  const [newTodoName, setNewTodoName] = useState("")
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const storedArray = localStorage.getItem("storedTodos")
    if (storedArray == null) {
      return initialValue
    } else {
      return JSON.parse(storedArray)
    }
  })

  useEffect(() => {
    localStorage.setItem("storedTodos", JSON.stringify(todos))
  }, [todos])

  function addNewTodo() {
    if (newTodoName === "") return

    dispatch({ type: ACTIONS.ADD, payload: { name: newTodoName } })

    setNewTodoName("")
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } })
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId)
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
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default App
