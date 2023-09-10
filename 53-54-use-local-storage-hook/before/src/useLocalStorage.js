import { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue == null) {
      if (typeof initialValue === "function") {
        return initialValue()
      } else {
        return initialValue
      }
    } else {
      return JSON.parse(storedValue)
    }
  })

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [value, key])

  return [value, setValue]
}
