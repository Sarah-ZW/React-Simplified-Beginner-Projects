import { TodoContext } from "./App"
import { useContext, useRef, useState } from "react"

export function TodoItem({ id, name, completed }) {
  const { toggleTodo, deleteTodo, updateTodoName } = useContext(TodoContext)
  const [isEditing, setIsEditing] = useState(false)
  const nameRef = useRef()

  function handleSubmit(e) {
      e.preventDefault()

      if (nameRef.current.value == '') return
      updateTodoName(id, nameRef.current.value)
      setIsEditing(false)
  }
  return (
    <>
      {isEditing ? (
        <form onSubmit={(handleSubmit)}>
          <input autoFocus type="text" defaultValue={name} ref={nameRef} />
          <button data-button-edit>
            Save
          </button>
        </form>
      ) : (
        <li className="list-item">
          <label className="list-item-label">
            <input
              checked={completed}
              type="checkbox"
              data-list-item-checkbox
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button data-button-edit onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button onClick={() => deleteTodo(id)} data-button-delete>
            Delete
          </button>
        </li>
      )}
    </>
  )
}
