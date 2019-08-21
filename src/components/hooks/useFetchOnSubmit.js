import { useReducer } from 'react'
import axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        loading: true,
        error: null,
        didFetch: true
      }
    case 'FETCH_SUCCESS':
      return {
        data: action.payload,
        loading: false,
        error: null,
        didFetch: true
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        didFetch: true
      }
    default:
      return state
  }
}

const initialState = {
  data: null,
  loading: false,
  error: null,
  didFetch: false
}

export const useFetchOnSubmit = url => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onSubmit = async () => {
    dispatch({ type: 'FETCHING' })

    try {
      const { data } = await axios.get(url)
      dispatch({ type: 'FETCH_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error })
    }
  }

  return [state, onSubmit]
}

export default useFetchOnSubmit
