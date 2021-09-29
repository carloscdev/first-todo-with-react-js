import '../assets/css/TodoSearch.css'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function TodoSearch() {

  const { name, setName } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setName(event.target.value)
  }
  return (
    <section className="containerSearch">
      <hr />
      <input
        className="inputSearch"
        placeholder="Buscar por nombre"
        value={name}
        onChange={onSearchValueChange}
      />
      <hr />
    </section>
  )
}

export { TodoSearch }