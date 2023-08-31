export function TodoItem( {id, name, completed, toggleTodo, handleDelete}) {
    return (
        <li  className="list-item">
        <label className="list-item-label">
          <input
            onChange={(e) => toggleTodo(id, e.target.checked)}
            type="checkbox"
            checked={completed}
            data-list-item-checkbox
          />
          <span data-list-item-text>{name}</span>
        </label>
        <button onClick={() => handleDelete(id)} data-button-delete>
          Delete
        </button>
      </li>
    )
   
}