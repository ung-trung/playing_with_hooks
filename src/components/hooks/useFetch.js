import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const loadData = async () => {
      const res = await axios.get(url)
      setData(res.data)
      setLoading(false)
    }
    loadData()
  }, [url])

  return { data, loading }
}

export default useFetch
