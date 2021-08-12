import React from 'react'
import styled from 'styled-components'

const RadioButtonLabelStyle = styled.label`
  color: black;
  display: flex;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 2rem;
  align-items: center;
`

const RadioButtonInputStyle = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 16px;
  height: 16px;
  margin-right: 8px;
  margin-bottom: 3px;
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

  :disabled {
    background-color: #dddddd;
  }
`

const RadioButtonTextStyle = styled.label`
  margin-left: 8px;
  margin-right: 24px;
`

function RadioButton({ name, value, disabled, checked, onCheck }) {
  return (
    <RadioButtonLabelStyle>
      <RadioButtonInputStyle
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onCheck}
      />
      <RadioButtonTextStyle>{value}</RadioButtonTextStyle>
    </RadioButtonLabelStyle>
  )
}

export default RadioButton
