import { useEffect, useReducer } from 'react'
import axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_SUCCESS':
      return {
        data: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  data: null,
  loading: true,
  error: null
}

export const useFetch = url => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'FETCHING' })

    let didCancel = false
    try {
      const loadData = async () => {
        const res = await axios.get(url)
        // wait so that we can load the loading animation
        await new Promise(resolve => setTimeout(resolve, 400))
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
        }
      }
      loadData()
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error })
    }

    return () => {
      didCancel = true
    }
  }, [url])

  return state
}

export default useFetch
