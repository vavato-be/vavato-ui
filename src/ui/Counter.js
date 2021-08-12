import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const CounterLabelStyle = styled.div`
  width: 72px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
`

const CounterStyle = styled.input`
  margin: 0;
  width: 20px;
  border: none;
  color: black;
  font-weight: 500;
  font-size: 0.75rem;
  text-align: center;
`

const CounterIconStyle = styled(FontAwesomeIcon)`
  padding: 4px;
  color: #c4c4c4;

  :hover {
    cursor: pointer;
  }
`

function Counter({ counter, setCounter }) {
  function changeCounter(counter) {
    const newCounter = parseInt(counter)
    if (newCounter > 0) {
      setCounter(newCounter)
    }
  }

  return (
    <CounterLabelStyle>
      <CounterIconStyle
        icon={faMinusCircle}
        onClick={() => changeCounter(counter - 1)}
      />
      <CounterStyle
        value={counter}
        onChange={(e) => changeCounter(e.target.value)}
      />
      <CounterIconStyle
        icon={faPlusCircle}
        onClick={() => changeCounter(counter + 1)}
      />
    </CounterLabelStyle>
  )
}

export default Counter
