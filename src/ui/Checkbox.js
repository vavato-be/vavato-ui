import React, { useState } from 'react'
import styled from 'styled-components'

import { safeProps } from './utils'

const Input = styled.input.attrs((props) => ({
  type: 'checkbox'
}))`
  display: inline-block;
  float: left;
  background: #ffffff;
  border: 2px solid #c4c4c4;
  border-radius: 3px;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  transition-duration: 0.3s;
  cursor: pointer;

  && {
    box-sizing: border-box !important;
  }

  &:checked {
    border: 1px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.secondary};
  }

  &:active {
    background-color: ${(props) => props.theme.secondary};
    border: 2px solid ${(props) => props.theme.primary};
  }
`

const Label = styled.label`
  line-height: 24px;
  display: flex;

  & .checkmark-react,
  .exported-component & .checkmark-react {
    background: ${(props) => props.theme.secondary};
    cursor: pointer;
    position: relative;
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin: 1px 12px 1px -28px;
    height: 22px;
    line-height: 22px;
    width: 16px;
  }
`

function Checkbox(props) {
  const [checked, setChecked] = useState(props.value || false)

  function handleChange({ currentTarget }) {
    setChecked(currentTarget.checked)
    if (props.onChange) {
      props.onChange(currentTarget.checked)
    }
  }

  return (
    <Label>
      <Input
        {...safeProps(props)}
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      {checked ? <span className='checkmark-react'>&#x2713;</span> : null}
      <span>{props.children}</span>
    </Label>
  )
}

export default Checkbox
