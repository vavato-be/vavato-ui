import React from 'react'
import styled from 'styled-components'

const SwitchLabelStyle = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
`

const SwitchCheckboxStyle = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;

  :checked ~ span {
    background-color: ${(props) => props.theme.secondary};
  }

  :focus ~ span {
    box-shadow: 0 0 1px ${(props) => props.theme.secondary};
  }

  :checked + span:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
    border: 1px solid ${(props) => props.theme.secondary};
  }
`

const SwitchSliderStyle = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  :before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`

function Switch({ checked, onCheck }) {
  return (
    <SwitchLabelStyle>
      <SwitchCheckboxStyle checked={checked} onChange={onCheck} />
      <SwitchSliderStyle />
    </SwitchLabelStyle>
  )
}

export default Switch
