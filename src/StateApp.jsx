import React, { useState } from 'react'
import { Button, Title } from './Components'

export default function StateApp () {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })
  const { counter1 } = counter
  const addCounter = () => {
    setCounter({
      ...counter,
      counter1: counter1 + 1
    })
  }
  return (
    <main className='p-5 font-sans'>
      <Title title='useState' />
      <fieldset>
        <Button onClick={() => addCounter()}>
          Counter 1 {counter1}
        </Button>
      </fieldset>
    </main>
  )
}
