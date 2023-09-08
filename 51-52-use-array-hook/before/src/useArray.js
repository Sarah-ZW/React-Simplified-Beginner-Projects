import { useCallback, useState } from "react"

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray)

  const set = useCallback((arrayParam) => {
    setArray(arrayParam)
  }, [])

  const push = useCallback((pushItem) => {
    setArray((currentArray) => [...currentArray, pushItem])
  }, [])

  const replace = useCallback((index, newValue) => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        newValue,
        ...currentArray.slice(index + 1),
      ]
    })
  }, [])

  const filter = useCallback((filterfunc) => {
    setArray((currentArray) => currentArray.filter(filterfunc))
  }, [])

  const remove = useCallback((index) => {
    setArray((currentArray) => {
      return [...currentArray.slice(0, index), ...currentArray.slice(index + 1)]
    })
  }, [])

  const clear = useCallback(() => {
    setArray([])
  }, [])

  const reset = useCallback(() => {
    setArray(initialArray)
  }, [initialArray])

  return {
    array,
    set,
    push,
    replace,
    filter,
    remove,
    clear,
    reset,
  }
}
