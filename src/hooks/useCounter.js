import { useState } from 'react'

export function useCounter (initialValue = 0, increment = 1) {
  const [counter, setCounter] = useState(initialValue)

  const addCounter = () => setCounter(counter + increment)
  const resetCounter = () => setCounter(initialValue)
  const substractCounter = () => setCounter(counter - increment)
  return {
    addCounter,
    counter,
    increment,
    resetCounter,
    substractCounter
  }
}
