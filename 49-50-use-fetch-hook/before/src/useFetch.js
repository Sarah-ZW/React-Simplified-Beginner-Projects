import { useState, useEffect } from "react"

export function useFetch(url, options = {}) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [isError, setError] = useState(false)

  useEffect(() => {
    setData(undefined)
    setError(false)
    setLoading(true)

    const controller = new AbortController()

    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(res)
      })
      .then(setData)
      .catch((e) => {
        if (e.name === "AbortError") return
        setError(true)
      })
      .finally(() => {
        if (controller.signal.aborted) return
        setLoading(false)
      })

    return () => controller.abort()
  }, [url])

  return {
    data,
    isLoading,
    isError,
  }
}
