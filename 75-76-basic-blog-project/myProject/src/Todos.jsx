import { useLoaderData } from "react-router-dom"

export function Todos() {
  const todos = useLoaderData()
  return (
    <>
      <div className="container">
        <h1 className="page-title">Todos</h1>
        <ul>
          {todos.map(todo => {
            return (
              <li className={todo.completed ? 'strike-through' : undefined } key={todo.id}>{todo.title}</li>
            )
           
          })}
        </ul>
      </div>
    </>
  )
}
