import '../assets/css/TodoCounter.css'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <header className="title">
      <h2>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </header>
  )
}

export { TodoCounter }