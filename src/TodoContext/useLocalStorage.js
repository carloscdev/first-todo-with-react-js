import { useState, useEffect } from 'react'

function useLocaleStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem = initialValue
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }, 1500)
  })

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedTodos)
      setItem(newItem)
    } catch (error) {
      setError(true)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocaleStorage }