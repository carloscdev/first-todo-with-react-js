import { createContext, useState } from "react";
import { useLocaleStorage } from './useLocalStorage'

const TodoContext = createContext()

function TodoProvider(props) {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocaleStorage('TODOS_v1', [])

  const [ name, setName ] = useState('')
  const [ openModal, setOpenModal ] = useState(false)

  const completedTodos = todos.filter(item => !!item.completed).length
  const totalTodos = todos.length


  let searchedTodos = []

  if(!name.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(item => {
      const todoText = item.text.toLowerCase()
      const searchText = name.toLocaleLowerCase()
      return todoText.includes(searchText)
    })
  }



  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos)
  }

  const completeTodo = (item) => {
    const todoIndex = todos.findIndex(todo => todo.text === item.text)

    const newTodos = [...todos]
    newTodos[todoIndex].completed = !item.completed
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)

    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      name,
      setName,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      { props.children }
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }

