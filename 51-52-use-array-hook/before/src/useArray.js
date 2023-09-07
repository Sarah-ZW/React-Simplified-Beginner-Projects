import { useState } from "react"

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray)

  function set(arrayParam) {
    setArray(arrayParam)
  }

  function push(pushItem) {
    setArray((currentArray) => [...currentArray, pushItem])
  }

  function replace(index, value) {
    setArray((currentArray) => {
      let newArray = [...currentArray]
      newArray[index] = value
    })
  }

  function filter(filterfunc) {
    setArray((currentArray) => currentArray.filter(filterfunc))
  }

  function remove(index) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== currentArray[index])
    })
  }

  function clear() {
    setArray([])
  }

  function reset() {
    setArray(initialArray)
  }

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
