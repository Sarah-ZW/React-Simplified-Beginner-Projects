import { useState, useEffect } from "react"

export function useFetch(url) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState(false)

  useEffect(() => {
    setData(undefined)
    setError(false)
    setLoading(true)

    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError(true))
      .finally(setLoading(false))
  }, [url])

  return {
    data,
    isLoading,
    error,
  }
}
