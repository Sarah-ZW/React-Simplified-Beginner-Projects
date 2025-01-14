import { createContext, useEffect, useReducer, useState } from "react"
import "./styles.css"
import { TodoItem } from "./TodoItem"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import { TodoFilterForm } from "./TodoFilterForm"

export const TodoContext = createContext()

const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
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

    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== payload.id)
    case ACTIONS.UPDATE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return {...todo, name: payload.name}
        }
        return todo
      })

    default:
      throw new error(`Cannot find action for type ${type}.`)
  }
  return state
}

function App() {
  const [filterName, setFilterName] = useState("")
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false)
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const storedArray = localStorage.getItem("storedTodos")
    if (storedArray == null) {
      return initialValue
    } else {
      return JSON.parse(storedArray)
    }
  })

  const filteredTodos = todos.filter((todo) => {
    if (hideCompletedFilter && todo.completed) return false
    return todo.name.includes(filterName)
  })

  useEffect(() => {
    localStorage.setItem("storedTodos", JSON.stringify(todos))
  }, [todos])

  function addNewTodo(newTodoName) {
    dispatch({ type: ACTIONS.ADD, payload: { name: newTodoName } })
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } })
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } })
  }

  function updateTodoName(id, name) {
    dispatch({ type: ACTIONS.UPDATE, payload: { id, name } })
  }

  return (
    <>
      <TodoContext.Provider
        value={{ todos: filteredTodos, addNewTodo, toggleTodo, deleteTodo, updateTodoName }}
      >
        <TodoFilterForm
          name={filterName}
          setName={setFilterName}
          hideCompleted={hideCompletedFilter}
          setHideCompleted={setHideCompletedFilter}
        />
        <TodoList />

        <NewTodoForm />
      </TodoContext.Provider>
    </>
  )
}

export default App
