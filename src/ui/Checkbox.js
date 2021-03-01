import React, { useState } from 'react';
import styled from 'styled-components';

import { safeProps } from './utils';

const Input = styled.input.attrs(props => ({
  type: 'checkbox'
}))`
  display: inline-block;
  float: left;
  background: #FFFFFF;
  border: 2px solid #C4C4C4;
  border-radius: 5px;
  width: ${(props) => (props.small ? '20px' : '24px')};
  height: ${(props) => (props.small ? '20px' : '24px')};
  margin-right: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  transition-duration: 0.3s;
  cursor: pointer;

  &:checked {
    border: 1px solid ${props => props.theme.text};
    background-color: ${props => props.theme.secondary};
  }

  &:active {
    background-color: ${props => props.theme.secondary};
    border: 2px solid ${props => props.theme.primary};
  }
`;

const Label = styled.label`
  line-height: ${(props) => (props.small ? '20px' : '24px')};

  & .checkmark-react, .exported-component & .checkmark-react {
    background: ${props => props.theme.secondary};
    cursor: pointer;
    position: relative;
    margin-left: ${(props) => (props.small ? '-23px' : '-28px')};
    color: white;
    font-size: ${(props) => (props.small ? '12px' : '18px')};
    font-weight: bold;
    margin-right: 12px;
  }
`;

function Checkbox(props) {
  const [checked, setChecked] = useState(props.value || false)

  function handleChange({ currentTarget }) {
    setChecked(currentTarget.checked)
    if(props.onChange) {
      props.onChange(currentTarget.checked);
    }
  }

  return (
    <Label small={props.small}>
      <Input
        {...safeProps(props)}
        checked={checked}
        onChange={e => handleChange(e) } />
      { checked ? <span className="checkmark-react">&#x2713;</span> : null }
      <span>{ props.children }</span>
    </Label>
  )
}

export default Checkbox;
