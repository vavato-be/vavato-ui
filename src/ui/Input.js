import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import { safeProps } from './utils'

const StyledInput = styled('input')`
  border: 2px solid ${(props) => rgba(props.theme.text, 0.4)};
  padding: 8px 16px;
  font-size: 13px;
  border-radius: 3px;

  &.error {
    border-color: red !important;
  }

  &::placeholder {
    color: ${(props) => rgba(props.theme.text, 0.4)};
  }

  &:focus,
  &:active {
    outline: none;
    border: 2px solid ${(props) => rgba(props.theme.text, 0.7)};
  }
`

const ErrorMessage = styled('div')`
  width: 100%;
  color: red;
`

function Input(props) {
  return (
    <React.Fragment>
      <StyledInput
        {...safeProps(props)}
        className={props.error ? `${props.className} error` : props.className}
      />
      {props.error && props.errorMessage ? (
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      ) : (
        ''
      )}
    </React.Fragment>
  )
}

export default Input
