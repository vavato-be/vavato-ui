import React, { useState } from 'react'
import Card from '../Card'
import Counter from '../Counter'

function CounterStyleGuide() {
  const [counter, setCounter] = useState(0)

  return (
    <Card>
      <div className='title'>&lt;Counter&gt;</div>
      <p>A counter serves to count up and down (it can't be less than zero).</p>
      <Card>
        <Counter setCounter={setCounter} counter={counter} />
      </Card>
    </Card>
  )
}

export default CounterStyleGuide
