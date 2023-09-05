export function useFetch() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState(false)

//   fetch(url)
//     .then(() => setLoading(false))
//     .catch((e) => setError(e))
//     .then((res) => setData(res.json()))

  return {
    data,
    isLoading,
    error,
  }
}
