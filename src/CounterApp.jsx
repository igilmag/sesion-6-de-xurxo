import { Button, Title } from './Components'
import { useCounter } from './hooks/useCounter'

function CounterApp () {
  const { addCounter, counter, increment, resetCounter, substractCounter } = useCounter(0, 2)

  return (
    <main className='p-5'>
      <Title title={`CounterApp (${counter})`} />
      <fieldset className='py-5'>
        <Button onClick={addCounter}>
          +{increment}
        </Button>
        <Button onClick={resetCounter}>
          Reset
        </Button>
        <Button onClick={substractCounter}>
          -{increment}
        </Button>
      </fieldset>
    </main>
  )
}

export default CounterApp
