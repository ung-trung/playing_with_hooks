import { useRef, useEffect } from 'react'

export const usePreviousValue = value => {
  const previousState = useRef()

  useEffect(() => {
    previousState.current = value
  }, [value])

  return previousState.current
}

export default usePreviousValue
