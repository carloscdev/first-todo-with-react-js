import '../assets/css/TodoForm.css'
import { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'

function TodoForm() {

  const [ newItem, setNewItem ] = useState('')
  const {
    addTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)
  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newItem)
    setOpenModal(!openModal)
  }
  const onChange = (event) => {
    setNewItem(event.target.value)
  }


  return(
    <form className="myForm" onSubmit={onSubmit}>
      <input
        className="inputForm"
        type="text"
        placeholder="Nombre de la tarea"
        value={newItem}
        onChange={onChange}
      />
      <button
        type="submit"
        className="buttonForm"
      >Agregar</button>
    </form>
  )
}

export { TodoForm }