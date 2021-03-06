import React from 'react'
import styled from 'styled-components'

const RadioInputLabelStyle = styled.label`
  color: black;
  display: flex;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 2rem;
  align-items: center;
`

const RadioInputInputStyle = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 16px;
  height: 16px;
  margin-right: 8px;
  position: relative;
  border-radius: 100%;
  border: 2px solid ${(props) => props.theme.secondary};

  :checked::before {
    content: '';
    top: 1px;
    left: 1px;
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 100%;
    background-color: ${(props) => props.theme.secondary};
  }

  :focus {
    outline: none;
  }
`

const RadioInputTextStyle = styled.label`
  margin-left: 0.5rem;
  margin-right: 1.5rem;
`

function RadioInput({ name, value, checked, onCheck }) {
  return (
    <RadioInputLabelStyle>
      <RadioInputInputStyle
        name={name}
        value={value}
        checked={checked}
        onChange={onCheck}
      />
      <RadioInputTextStyle>{value}</RadioInputTextStyle>
    </RadioInputLabelStyle>
  )
}

export default RadioInput
