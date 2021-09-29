import { useContext } from 'react'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { TodoButtom } from '../components/TodoButtom'
import { TodoContext } from '../TodoContext'
import { TodoModal } from '../components/TodoModal'
import { TodoForm } from '../components/TodoForm'
// const defaultTodos = [
//   {
//     text: 'Terminar curso de React',
//     completed: false
//   },
//   {
//     text: 'Aprender Django y Python',
//     completed: true
//   },
//   {
//     text: 'Terminar mi sito web',
//     completed: false
//   }
// ]

function TodoListMachine() {  
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)

  return (    
    <section className="container">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        { error && <p>Ocurrió un error ...</p> }
        { loading && <p>Cargando lista ...</p> }
        { (!loading && !searchedTodos.length) && <p>No hay tareas ...</p> }

        {
          searchedTodos.map((item, index) => (
            <TodoItem
              {...item}
              key={index}
              onComplete={() => completeTodo(item)}
              onDelete= {() => deleteTodo(item.text)}
            />
          ))
        }
      </TodoList>

      {
        !!openModal &&
        <TodoModal>
          <TodoForm />
        </TodoModal>
      }
      <TodoButtom setOpenModal={setOpenModal} openModal={openModal}/>
    </section>
  )
}

export { TodoListMachine }